import styled from "styled-components";

export const CardCategorys = styled.div`
  height: 100%;
  width: 90%;
  display: flex;
  justify-content: center;
`;

export const CardItemCategory = styled.div`
  height: 6vh;
  width: fit-content;
  border: solid 1px #ccc;
  border-radius: 50%;
  display: flex;
  align-items: center;
  border: none;
  color: white;
  margin: 2%;

  @media (max-width: 417px) {
    display: none;
  }
  @media (max-width: 260px) {
    display: none;
  }
`;
