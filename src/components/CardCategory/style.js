import styled from "styled-components";

export const CardCategorys = styled.div`
  height: auto;
  width: 50%;
  display: flex;
  flex-direction: row;
  padding-left: 10px;
  margin-top: 15px;
  /* background-color: #ccc; */
  margin-left: -14px;
`;

export const CardItemCaterory = styled.div`
  height: 3rem;
  width: 3rem;
  border: solid 1px #ccc;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-left: 10px;

  @media (max-width: 360px) {
    display: none;
  }
  @media (max-width: 260px) {
    display: none;
  }
`;
