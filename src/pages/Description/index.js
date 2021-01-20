import { Container, Body, Header, StyledDescription, ButtonDiv } from "./style";
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
      <Container>
        <Header>
          <div>
            <Link to="/cadastro">Seja um doador</Link>
          </div>
          <div>
            <Link to="/login">Login</Link>
          </div>
        </Header>

        <Body>
          <h1>Carrinho de Mercado</h1>
          <section>
            <p>Termina em 01/01/2222</p>
          </section>

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

          <StyledDescription>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              dapibus nisl eget dui tristique ornare. Etiam commodo ligula non
              est feugiat egestas. Etiam quis molestie urna. Nullam vitae libero
              ut sem gravida pharetra ac vitae massa.
            </p>

            <ButtonDiv>
              <button
                style={{
                  width: "fit-content",
                  fontSize: "20px",
                  backgroundColor: "gray",
                }}
              >
                Voltar
              </button>
              <button style={{ width: "40%", height: "7vh" }}>Eu quero!</button>
            </ButtonDiv>
          </StyledDescription>
        </Body>

        {/* <Similares>
          <h2>Produtos Similares:</h2>
        </Similares> */}
        <Footer></Footer>
      </Container>
    </motion.div>
  );
};

export default Description;
