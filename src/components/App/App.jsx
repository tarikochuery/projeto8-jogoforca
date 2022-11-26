import { StyleApp } from "./style";
import { Jogo } from '../Jogo/Jogo';
import { useState } from "react";
import palavras from '../../palavras';
import { Letras } from "../Letras/Letras";

let palavraSecreta;
const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

function App() {
  const [erros, setErros] = useState(0);
  const [tentativas, setTentaivas] = useState(alfabeto);

  const [palavraSecretaRenderizada, setPalavraSecretaRenderizada] = useState([]);

  console.log(palavraSecreta)

  const construirPalavraSecretaParaRenderizacao = (palavraSecreta) => {
    let arrayPalavraSecreta = [...palavraSecreta];
    const palavraSecretaParaRenderizacao = arrayPalavraSecreta.map(() => '_');
    return palavraSecretaParaRenderizacao.join(' ');
  };

  const handleClickEscolherPalavra = () => {
    const indexPalavraSecreta = Math.floor((Math.random()) * palavras.length);
    palavraSecreta = palavras[indexPalavraSecreta];
    setPalavraSecretaRenderizada(construirPalavraSecretaParaRenderizacao(palavraSecreta));
    setTentaivas([]);
    setErros(0)
  };

  const handeClickLetra = (letra) => {
    const arrayPalavraSecreta = [...palavraSecreta];
    const temLetraNaPalavraSecreta = arrayPalavraSecreta.includes(letra);
    setTentaivas(anter => [...anter, letra]);

    if (!temLetraNaPalavraSecreta) {
      setErros(anter => anter + 1);
      return;
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
  };

  return (
    <StyleApp>
      <Jogo 
        quantidadeErros={erros} 
        palavra={palavraSecretaRenderizada} 
        clickEscolherPalavra={handleClickEscolherPalavra} 
      />
      <Letras 
        darPalpite={handeClickLetra} 
        tentativas={tentativas} 
        alfabeto={alfabeto}
      />
      {/* <Chute /> */}
    </StyleApp>
  );
}

export { App };
