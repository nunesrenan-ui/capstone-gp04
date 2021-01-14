// import "./App.css";
import styled from "styled-components";
import Routes from "./routes";

function App() {
  return (
    <>
      <Container>
        {/* <header></header> */}
        <Routes></Routes>
        <footer>
          <a href="https://www.linkedin.com/in/adilson-dias-6a0a18170/">
            Adilson Dias
          </a>

          <a href="https://www.linkedin.com/in/amanda-gon%C3%A7alves-6a9a82a3/">
            Amanda Gonçalves
          </a>

          <a href="https://www.linkedin.com/in/j%C3%BAlia-sperandio-b31493aa/">
            Júlia Sperandio
          </a>

          <a href="https://www.linkedin.com/in/lucasfsilva2310/">
            Lucas Ferreira
          </a>

          <a href="https://www.linkedin.com/in/renan-nunes-2538ab1b2/">
            Renan Nunes
          </a>
        </footer>
      </Container>
    </>
  );
}

export default App;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  footer {
    width: 100%;
    height: 5%;
    background-color: #ff9f1c;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 0.8em;
  }
`;
