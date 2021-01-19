import styled from "styled-components";
import { Link } from "react-router-dom";

const Description = () => {
  return (
    <>
      <Header>
        <div>
          <Link to="/cadastro">Seja um doador</Link>
        </div>
        <div>
          <Link to="/login">Login</Link>
        </div>
      </Header>
      <Container>
        <div>
          <img src="https://a-static.mlcdn.com.br/1500x1500/camiseta-camisa-geek-os-simpsons-bart-simpson-100-algodao-atelier-do-silk/atelierdosilk/6967184652/9e5e2715572cd8d33c46f73bb932db3b.jpg" />
          <StyledDescription>
            <h1>Título</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              dapibus nisl eget dui tristique ornare. Etiam commodo ligula non
              est feugiat egestas. Etiam quis molestie urna. Nullam vitae libero
              ut sem gravida pharetra ac vitae massa.
            </p>
            <section>
              <p>Termina em 01/01/2222</p>
            </section>
            <button>Eu quero!</button>
          </StyledDescription>
        </div>
        <Similares>
          <h2>Produtos Similares:</h2>
        </Similares>
      </Container>
    </>
  );
};

export default Description;

export const Container = styled.div`
  width: 100vw;
  height: 90%;
  background-color: #ffc15e;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;

  div {
    box-sizing: border-box;
    width: 70%;
    height: 60%;
    background-color: whitesmoke;
    border-radius: 50px;
    margin-top: 2%;
    display: flex;
    align-items: center;
  }

  img {
    width: 35%;
    height: 80%;
    margin-left: 7%;
    padding: 0;
    border-radius: 50px;
    border: 2px solid #ff9f1c;
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
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  h1 {
    color: #ff9f1c;
    margin: 0;
  }

  section {
    width: 50%;
    height: 15%;
    border-radius: 50px;
    background-color: #ff9f1c;
    opacity: 60%;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      width: 90%;
      height: 90%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  button {
    width: 50%;
    height: 15%;
    border: none;
    text-align: center;
    background-color: #ff9f1c;
    color: white;
    border-radius: 50px;
    font-size: 1.5em;
  }

  p {
    width: 60%;
    height: fit-content;
    margin: 2% 3%;
  }
`;

export const Similares = styled.div`
  display: flex;
  flex-direction: column;
  color: #ff9f1c;
  height: fit-content;
`;
