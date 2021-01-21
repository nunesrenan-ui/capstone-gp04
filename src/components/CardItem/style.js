import styled from "styled-components";

export const Container = styled.div`
  width: fit-content;
  height: auto;
  box-sizing: border-box;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  height: 370px;
  width: 300px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  border-radius: 50px;
  background-color: white;
  padding: 1%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 1%;
`;

export const CardImage = styled.div`
  height: 20vh;
  width: 25vw;
  margin-top: 2%;
  border: solid 1px #ccc;
  border-radius: 50px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
  }
`;

export const CardBody = styled.div`
  height: 150px;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2%;

  h2 {
    font-size: 1.5em;
  }

  span {
    font-size: 1em;
    color: black;
    text-align: left;
  }
`;
