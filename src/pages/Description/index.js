import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../../components/Footer";
import React from "react";
import { Carousel, Box, Image } from "grommet";

const Description = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Header>
        <div>
          <Link to="/cadastro">Seja um doador</Link>
        </div>
        <div>
          <Link to="/login">Login</Link>
        </div>
      </Header>

      <Container>
        <Body>
          <h1>Carrinho de Mercado</h1>
          <section>
            <p>Termina em 01/01/2222</p>
          </section>
          <Box height="medium" width="large" overflow="hidden">
            <Box height="medium" width="large" overflow="hidden">
              <Carousel fill>
                <Image
                  fit="cover"
                  src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg"
                />
                <Image fit="cover" src="//v2.grommet.io/assets/IMG_4245.jpg" />
                <Image fit="cover" src="//v2.grommet.io/assets/IMG_4210.jpg" />
              </Carousel>
            </Box>
          </Box>

          <StyledDescription>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              dapibus nisl eget dui tristique ornare. Etiam commodo ligula non
              est feugiat egestas. Etiam quis molestie urna. Nullam vitae libero
              ut sem gravida pharetra ac vitae massa.
            </p>

            <ButtonDiv>
              <button style={{ width: "fit-content", fontSize: "20px" }}>
                Voltar
              </button>
              <button style={{ width: "40%", height: "7vh" }}>Eu quero!</button>
            </ButtonDiv>
          </StyledDescription>
        </Body>
        {/* <Similares>
          <h2>Produtos Similares:</h2>
        </Similares> */}
      </Container>
      <Footer></Footer>
    </motion.div>
  );
};

export default Description;

export const Container = styled.div`
  width: 100%;
  height: 90vh;
  background-image: linear-gradient(#ffc15e, #f5ff90, #d6ffb7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Body = styled.div`
  width: 60%;
  height: 90%;
  background-color: white;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 3%;

  img {
    border-radius: 50px;

    /* margin: 2% 0; */
  }

  h1 {
    color: #ff9f1c;
    margin: 1%;
  }

  section {
    width: 50%;
    height: 4%;
    border-radius: 50px;
    background-color: wheat;
    opacity: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: fit-content;
    margin: 2%;
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

    p {
      width: 90%;
      height: fit-content;
      margin: 3%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    div {
      background-color: white;
    }
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
    width: ${(props) => `${props.myWidth}vw`};
    height: 4vh;
    border: none;
    text-align: center;
    background-color: #ff9f1c;
    color: white;
    border-radius: 50px;
    font-size: 1.5em;
    margin: 1%;
  }
`;

// export const Similares = styled.div`
//   display: flex;
//   flex-direction: column;
//   color: #ff9f1c;
//   height: fit-content;
// `;
