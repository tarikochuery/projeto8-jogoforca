import { Letra } from "../Letra/Letra";
import { StyleLetras } from "./style";

export const  Letras = ({ darPalpite, tentativas, alfabeto })  => {

  return (
    <StyleLetras>
      {alfabeto.map(letra => 
      <Letra 
        letra={letra} 
        key={letra} 
        darPalpite={darPalpite}
        tentativas={tentativas}
      />)}
    </StyleLetras>
  )
}