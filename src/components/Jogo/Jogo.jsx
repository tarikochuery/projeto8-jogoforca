import forca0 from '../../assets/forca0.png';
import forca1 from '../../assets/forca1.png';
import forca2 from '../../assets/forca2.png';
import forca3 from '../../assets/forca3.png';
import forca4 from '../../assets/forca4.png';
import forca5 from '../../assets/forca5.png';
import forca6 from '../../assets/forca6.png';
import { StyleJogo } from './style';

const imagensForca = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];

export const Jogo = ({
  quantidadeErros,
  palavra,
  clickEscolherPalavra,
  corPalavraSecreta,
  jogoFinalizado,
  palavraSecreta
}) => {

  return (
    <StyleJogo corPalavraSecreta={corPalavraSecreta}>
      <div>
        <img
          data-test="game-image"
          src={imagensForca[quantidadeErros]}
          alt="Quantidade de erros"
        />
      </div>
      <div>
        <button
          data-test="choose-word"
          onClick={clickEscolherPalavra}
        >Escolher Palavra</button>
        <p
          data-test="word"
          data-answer={palavraSecreta}
        >{palavra}</p>
      </div>
    </StyleJogo>
  );
};