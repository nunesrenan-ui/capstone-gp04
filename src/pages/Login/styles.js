import styled from "styled-components";
import hands from "../../img/hands.jpeg";

export const LoginLayout = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  top: 3vh;
  background-image: url(${hands});
  display: flex;
  justify-content: center;
  align-items: center;
`;

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

  .headerLinks {
    font-size: 20px;
    color: black;
    text-decoration: none;
    padding: 15px;
  }
`;
