import { StyleApp } from "./style";
import { Jogo } from '../Jogo/Jogo';
import { useState } from "react";
import palavras from '../../palavras';
import { Letras } from "../Letras/Letras";
import { Chute } from "../Chute/Chute";

let palavraSecreta;
const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const VERDE = '#27AE60';
const VERMELHO = '#FF0000';
const PRETO = '#000';
const MAX_ERROS = 6;

function App() {
  const [erros, setErros] = useState(0);
  const [tentativas, setTentativas] = useState([]);
  const [jogoFinalizado, setJogoFinalizado] = useState(true);
  const [corPalavraSecreta, setCorPalavraSecreta] = useState(PRETO);
  const [palavraSecretaRenderizada, setPalavraSecretaRenderizada] = useState('');

  if (!jogoFinalizado) {
    if (palavraSecretaRenderizada && !palavraSecretaRenderizada.includes('_')) {
      setJogoFinalizado(true);
      setCorPalavraSecreta(VERDE);
      setPalavraSecretaRenderizada(palavraSecreta);
    } else if (erros === MAX_ERROS) {
      setJogoFinalizado(true);
      setCorPalavraSecreta(VERMELHO);
      setPalavraSecretaRenderizada(palavraSecreta);
    }
  }

  const reiniciarJogo = () => {
    setJogoFinalizado(false);
    setCorPalavraSecreta(PRETO);
    setErros(0);
    setTentativas([]);
  };

  const construirPalavraSecretaParaRenderizacao = (palavraSecreta) => {
    let arrayPalavraSecreta = [...palavraSecreta];
    const palavraSecretaParaRenderizacao = arrayPalavraSecreta.map(() => '_');
    return palavraSecretaParaRenderizacao.join(' ');
  };

  const handleClickEscolherPalavra = () => {
    const indexPalavraSecreta = Math.floor((Math.random()) * palavras.length);
    palavraSecreta = palavras[indexPalavraSecreta];
    setPalavraSecretaRenderizada(construirPalavraSecretaParaRenderizacao(palavraSecreta));
    reiniciarJogo();
  };

  const handeClickLetra = (letra) => {
    const arrayPalavraSecreta = [...palavraSecreta];
    const temLetraNaPalavraSecreta = arrayPalavraSecreta.includes(letra);
    setTentativas(anter => [...anter, letra]);

    if (!temLetraNaPalavraSecreta) {
      setErros(anter => anter + 1);
    }

    if (temLetraNaPalavraSecreta) {
      const arrayIndexLetraCorreta = arrayPalavraSecreta.map((l, idx) => l === letra ? idx : -1).filter(idx => idx !== -1);
      const novaPalavraSecretaRenderizada = palavraSecretaRenderizada.split(' ').map((char, idx) => {
        if (char !== '_') return char;
        if (arrayIndexLetraCorreta.includes(idx)) return letra;
        return '_';
      }).join(' ');

      setPalavraSecretaRenderizada(novaPalavraSecretaRenderizada);
    }
  };

  const handleClickChute = (palavra) => {
    setJogoFinalizado(true);
    const eAPalavraCorreta = palavra.toLowerCase() === palavraSecreta;
    setPalavraSecretaRenderizada(palavraSecreta);

    if (eAPalavraCorreta) {
      setCorPalavraSecreta(VERDE);
    } else {
      setCorPalavraSecreta(VERMELHO);
      setErros(MAX_ERROS);
    }

  };

  return (
    <StyleApp>
      <Jogo
        quantidadeErros={erros}
        palavra={palavraSecretaRenderizada}
        clickEscolherPalavra={handleClickEscolherPalavra}
        corPalavraSecreta={corPalavraSecreta}
        jogoFinalizado={jogoFinalizado}
        palavraSecreta={palavraSecreta}
      />
      <Letras
        darPalpite={handeClickLetra}
        tentativas={tentativas}
        alfabeto={alfabeto}
        jogoFinalizado={jogoFinalizado}
      />
      <Chute
        chutar={handleClickChute}
        jogoFinalizado={jogoFinalizado}
      />
    </StyleApp>
  );
}

export { App };
