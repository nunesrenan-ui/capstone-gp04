import styled from "styled-components";

export const DivContainer = styled.div`
  @media (max-width: 521px) {
    width: 80%;
  }

  box-sizing: border-box;
  height: 30%;
  width: 60%;
  background-color: #ff9f1c;
  border-radius: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 2% 0;
  padding: 2%;
`;

export const CardInput = styled.div`
  height: 50px;
  width: 70%;
  background-color: white;
  border-radius: 50px;
`;

// export const Btn = styled.button`
//   height: 4vh;
//   border: 2px solid white;
//   text-align: center;
//   background-color: #ff9f1c;
//   color: white;
//   border-radius: 50px;
//   font-size: 1.5em;
//   margin: 1%;
// `;
