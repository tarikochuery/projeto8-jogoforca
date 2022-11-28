import { StyleLetra } from "./style";

export const Letra = ({ letra, darPalpite, tentativas, jogoFinalizado }) => {
  return (
    <StyleLetra
      data-test="letter"
      onClick={() => darPalpite(letra)}
      disabled={tentativas.includes(letra) || jogoFinalizado}
    >
      {letra.toUpperCase()}
    </StyleLetra>
  );
};