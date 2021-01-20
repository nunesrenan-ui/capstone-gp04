import styled from "styled-components";

// export const BodyPage = styled.div`
//   /* width: 100%;
// height: 100%;
// margin-left: auto;
// margin-right: auto;

// @media (max-width: 760px) {
//   width: 760px;
// }
// @media (max-width: 660px) {
//   width: 660px;
// }
// @media (max-width: 560px) {
//   width: 560px;
// }
// @media (max-width: 460px) {
//   width: 460px;
// }
// @media (max-width: 360px) {
//   width: 360px;
// }
// @media (max-width: 260px) {
//   width: 260px;
// }
//`; */

export const Header = styled.div`
  width: 100%;
  height: 5vh;
  background-color: #ff9f1c;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  div {
    margin: 0 1%;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 90vh;
  background-image: linear-gradient(#ffc15e, #f5ff90, #d6ffb7);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DivContainerCards = styled.div`
  width: 100%;
  height: 100%;
`;
