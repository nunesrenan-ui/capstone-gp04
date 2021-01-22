import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  overflow: hidden;
  height: 100vh;
  background-image: linear-gradient(#ffc15e, #f5ff90, #d6ffb7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; ;
`;

export const Body = styled.div`
  width: 50%;
  height: 85%;
  background-color: white;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 3%;
  margin: 2% 0;

  img {
    border-radius: 50px;
    /* max-width: 60%; */
    /* max-height: fit-content; */
  }

  h1 {
    color: #ff9f1c;
    margin: 0.5%;
    font-size: 3em;
  }
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
`;

export const StyledDescription = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2%;

  p {
    width: 20vw;
    height: fit-content;
    margin: 2%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  div {
    background-color: white;
    width: 90%;
    display: flex;
    flex-wrap: wrap;
  }
`;

export const ButtonDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 50px;
  margin-bottom: 3%;

  button {
    width: 20vh;
    height: 5vh;
    border: none;
    text-align: center;
    background-color: #ff9f1c;
    color: white;
    border-radius: 50px;
    font-size: 2em;
    margin: 1%;
    cursor: pointer;
  }
`;
