import { StyleLetra } from "./style";

export const Letra = ({ letra, darPalpite, tentativas }) => {
  return (
    <StyleLetra 
      onClick={() => darPalpite(letra)}
      disabled={tentativas.includes(letra)}
    >
      {letra.toUpperCase()}
    </StyleLetra>
  );
};