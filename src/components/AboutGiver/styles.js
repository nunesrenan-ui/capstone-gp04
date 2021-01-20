import styled from "styled-components";

export const ScrollDownHome = styled.div`
  width: auto;
  max-width: 100%;
  min-height: 100vh;
  max-height: 100%;
  background-color: #d6ffb7;
  color: black;
  font-size: 25px;
  margin: 0;
  padding: 20px;
  text-align: justify;
  justify-content: center;
  align-items: center;

  p,
  h1,
  h3 {
    max-width: 90%;
    margin: 8px auto;
  }

  .opacity {
    background-color: rgba(0, 0, 0, 0.2);
    margin: 0 auto;
    margin-bottom: 15px;
    max-width: 65%;
    border-radius: 50px;
  }

  h1,
  h3 {
    text-align: center;
    color: #f5ff90;
  }
`