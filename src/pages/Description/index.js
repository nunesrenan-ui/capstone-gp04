import { Container, Body, Header, StyledDescription, ButtonDiv } from "./style";
import { useHistory } from "react-router-dom";
import HeaderAll from "../../components/Header";
import { motion } from "framer-motion";
import FooterAll from "../../components/Footer";
import React from "react";
import { Carousel, Box, Image } from "grommet";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Description = () => {
  const history = useHistory();
  // const checkToken = useSelector((state) => state.loginData.token);
  const localToken = localStorage.getItem("authToken");

  const productItem = useSelector((state) => state.product);

  useEffect(() => {
    if (!localToken) {
      history.push("/");
    }
  }, [localToken]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Container>
        <HeaderAll />

        <Body>
          <h1>{productItem.nome}</h1>
          <section>
            <p>Termina em 01/01/2222</p>
          </section>

          <Box height="medium" width="large" overflow="hidden">
            <Carousel fill>
              {productItem.imagem ? (
                <img
                  src={productItem.imagem}
                  alt={`Foto ${productItem.nome}`}
                />
              ) : (
                <h1>Sem foto</h1>
              )}
              <Image fit="cover" src="//v2.grommet.io/assets/IMG_4245.jpg" />
              <Image fit="cover" src="//v2.grommet.io/assets/IMG_4210.jpg" />
            </Carousel>
          </Box>

          <StyledDescription>
            <p>{productItem.descricao}</p>
            <h3>Estado da doação: {productItem.estado}</h3>
            {/* ajustar tamanho dos botões voltar e eu quero: cada item mostra um tamanho diferente */}
            <ButtonDiv>
              <button
                style={{
                  width: "30%",
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

        <FooterAll></FooterAll>
      </Container>
    </motion.div>
  );
};

export default Description;
