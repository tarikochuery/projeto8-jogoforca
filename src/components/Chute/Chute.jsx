import { useState } from "react";
import { StyleChute } from "./style";

export const Chute = ({ chutar, jogoFinalizado }) => {
  const [chute, setChute] = useState('')

  const handleClick = () => {
    chutar(chute)
    setChute('')
  }

  return (
    <StyleChute>
      <p>
        Já sei a palavra
      </p>
      <input
        data-test="guess-input"
        value={chute} 
        onChange={(e) => setChute(e.target.value)} 
        type="text" 
        disabled={jogoFinalizado}
      />
      <button 
        data-test="guess-button"
        disabled={jogoFinalizado} 
        onClick={handleClick}
      >Chutar</button>
    </StyleChute>
  );
};