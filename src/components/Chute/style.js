import styled from "styled-components";

export const StyleChute = styled.div`
  display: flex;
  gap: 13px;
  width: 100%;
  max-width: 624px;
  align-items: center;
  margin: 0 auto;

  & p {
    font-size: 20px;
  }

  & input {
    border: 1px solid #CCCCCC;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
    border-radius: 3px;
    width: 353px;
    height: 40px;
    padding: 0 5px;
    font-size: 20px;
  }      

  & button {
    background-color: #E1ECF4;
    border: 1px solid #7AA7C7;
    width: 100px;
    height: 40px;
    border-radius: 3px;
  }
`;