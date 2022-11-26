import styled from "styled-components";

export const StyleJogo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  & div:first-child{
    max-width: 400px;
  }

  & div:first-child img {
    width: 100%;
  }

  & div:last-child {
    display: flex;
    flex-direction: column;
    gap: 282px;
  }

  & button {
    align-self: flex-end;
    width: 200px;
    height: 60px;
    background-color: #27ae60;
    border-radius: 8px;
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
  }

  & p {
    font-weight: 700px;
    font-size: 50px;
    color: ${props => props.corPalavraSecreta};
  }
`