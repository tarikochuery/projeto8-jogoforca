import { StyleLetra } from "./style";

export const Letra = ({ letra, darPalpite, tentativas, jogoFinalizado }) => {
  return (
    <StyleLetra
      onClick={() => darPalpite(letra)}
      disabled={tentativas.includes(letra) || jogoFinalizado}
    >
      {letra.toUpperCase()}
    </StyleLetra>
  );
};