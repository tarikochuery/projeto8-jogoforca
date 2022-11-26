import styled from "styled-components";

export const StyleLetra = styled.button`
  width: 40px;
  height: 40px;
  background-color: #E1ECF4;
  color: #7AA7C7;
  border: 1px  solid #7AA7C7;
  border-radius: 3px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;

  &:disabled{
    background-color: #9FAAB5;
    color: #798A9F;
    cursor: default;
  }
`;