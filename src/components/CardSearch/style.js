import styled from "styled-components";

export const Card = styled.div`
  height: 150px;
  width: 85%;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  border-radius: 0.5rem;
  background-color: #303030;
  padding: 10px;
  display: flex;
  flex-direction: column;

  margin-left: auto;
  margin-right: auto;
`;
export const CardTop = styled.div`
  height: 50px;
  width: 100%;
  /* padding-bo: 10px; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
  margin-left: 5px;
  margin-right: auto;
  /* 
  @media (max-width: 360px) {
    height: auto;
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  @media (max-width: 260px) {
    height: auto;
    display: flex;
    flex-direction: column;
    width: 100%;
  } */
`;

export const CardInput = styled.div`
  height: 50px;
  width: 70%;
  background-color: white;
  border-radius: 25px;
`;

export const Btn = styled.div``;
