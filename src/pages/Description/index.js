import { Container, Body, StyledDescription, ButtonDiv } from "./style";
import { useHistory } from "react-router-dom";
import HeaderAll from "../../components/Header";
import { motion } from "framer-motion";
import FooterAll from "../../components/Footer";
import React from "react";
import { Carousel, Box, Image } from "grommet";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";

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

  // const EuQuero = (produto, id) => {
  //   // Pegar ID pelo Token
  //   let decoded = jwt_decode(localToken);

  //   // Pegar objeto do State Global - pegar o produto com useSelector no State Global(Product)
  //   const donationsList = useSelector((state) => state.product);

  //   // Requisição para armazenar objeto no cart e Enviar objeto pro cart
  //   // https://api-capstone-grupo04.herokuapp.com/cart, {Product}

  //   axios
  //     .post("https://api-capstone-grupo04.herokuapp.com/cart", {
  //       product: produto,
  //       id: id,
  //     })
  //     .then((res) => console.log("deu boa"));

  //   // Analisar o envio de dados do produto/id para a API
  // };

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
          <h1>
            {productItem.type} - {productItem.brand}
          </h1>
          <Box height="large" width="large" overflow="hidden">
            <Carousel fill>
              <Image fit="cover" src={productItem.side} />
              <Image fit="cover" src={productItem.frontSide} />
              <Image fit="cover" src={productItem.backSide} />
            </Carousel>
          </Box>

          <StyledDescription>
            <div>
              <p>
                <p style={{ color: "red" }}>
                  Esta doação termina em {productItem.date}
                </p>
                <p>
                  <b> Tamanho: </b> {productItem.size}
                </p>
                <p>
                  <b>Descrição do Item:</b> {productItem.description}
                </p>
                <p>
                  <b> Estado da doação:</b> {productItem.donationState}
                </p>
              </p>
            </div>

            <ButtonDiv>
              <button
              // onClick={() => EuQuero({ nome: "chave" }, 9)}
              // style={{ width: "40%", height: "7vh" }}
              >
                Eu quero!
              </button>
              <button
                onClick={() => history.push("/feed")}
                style={{
                  backgroundColor: "gray",
                }}
              >
                Voltar
              </button>
            </ButtonDiv>
          </StyledDescription>
        </Body>

        <FooterAll></FooterAll>
      </Container>
    </motion.div>
  );
};

export default Description;
