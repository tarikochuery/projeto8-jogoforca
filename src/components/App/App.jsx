import { StyleApp } from "./style";
import { Jogo } from '../Jogo/Jogo';
import { useState } from "react";
import palavras from '../../palavras';
import { Letras } from "../Letras/Letras";
import { Chute } from "../Chute/Chute";

let palavraSecreta;
const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const VERDE = '#27AE60'
const VERMELHO = '#FF0000'

function App() {
  const [erros, setErros] = useState(0);
  const [tentativas, setTentativas] = useState([]);
  const [jogoFinalizado, setJogoFinalizado] = useState(true)
  const [corPalavraSecreta, setCorPalavraSecreta] = useState('#000')
  const [palavraSecretaRenderizada, setPalavraSecretaRenderizada] = useState('');

  

  console.log(palavraSecreta)

  const verificarSeJogoFoiFinalizado = () => {
    console.log('verifiquei')
    if (erros === 5) {
      setJogoFinalizado(true)
      setCorPalavraSecreta(VERMELHO)
      setPalavraSecretaRenderizada(palavraSecreta)
      return
    }

    if (!palavraSecretaRenderizada.includes('_')) {
      setJogoFinalizado(true)
      setCorPalavraSecreta(VERDE)
      setPalavraSecretaRenderizada(palavraSecreta)
      return
    }
  }

  const reiniciarJogo = () => {
    setJogoFinalizado(false)
    setCorPalavraSecreta('#000')
    setErros(0)
    setTentativas([])
  }

  const construirPalavraSecretaParaRenderizacao = (palavraSecreta) => {
    let arrayPalavraSecreta = [...palavraSecreta];
    const palavraSecretaParaRenderizacao = arrayPalavraSecreta.map(() => '_');
    return palavraSecretaParaRenderizacao.join(' ');
  };

  const handleClickEscolherPalavra = () => { 
    const indexPalavraSecreta = Math.floor((Math.random()) * palavras.length);
    palavraSecreta = palavras[indexPalavraSecreta];
    setPalavraSecretaRenderizada(construirPalavraSecretaParaRenderizacao(palavraSecreta));
    reiniciarJogo()
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
        if (char !== '_') return char
        if (arrayIndexLetraCorreta.includes(idx)) return letra
        return '_'
      }).join(' ')
      
      setPalavraSecretaRenderizada(novaPalavraSecretaRenderizada)
    }

    verificarSeJogoFoiFinalizado()
  };

  const handleClickChute = (palavra) => {
    setJogoFinalizado(true)
    const eAPalavraCorreta = palavra.toLowerCase() === palavraSecreta
    setPalavraSecretaRenderizada(palavraSecreta)

    if (eAPalavraCorreta) {
      setCorPalavraSecreta(VERDE) 
    } else {
      setCorPalavraSecreta(VERMELHO)
      setErros(6)
    }
    
  }

  return (
    <StyleApp>
      <Jogo 
        quantidadeErros={erros} 
        palavra={palavraSecretaRenderizada} 
        clickEscolherPalavra={handleClickEscolherPalavra}
        corPalavraSecreta={corPalavraSecreta} 
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
