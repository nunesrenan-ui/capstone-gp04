import { Container, Body, StyledDescription, ButtonDiv } from "./style";
import { useHistory } from "react-router-dom";
import HeaderAll from "../../components/Header";
import { motion } from "framer-motion";
import FooterAll from "../../components/Footer";
import React from "react";
import { Carousel, Box, Image } from "grommet";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import wishesCartThunk from "../../store/modules/myWishes/thunks";

const Description = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [addButton, setAddButton] = useState(false);
  const localToken = localStorage.getItem("authToken");
  let decoded = jwt_decode(localToken);
  const productItem = useSelector((state) => state.product);

  useEffect(() => {
    if (!localToken) {
      history.push("/");
    }
  }, [localToken]);

  const EuQuero = (produto, id) => {
    dispatch(wishesCartThunk(produto, id));

    setAddButton(true);
  };

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
                onClick={() => EuQuero(productItem, decoded)}
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
              {addButton && <span>Item adicionado. Boa sorte!</span>}
            </ButtonDiv>
          </StyledDescription>
        </Body>

        <FooterAll></FooterAll>
      </Container>
    </motion.div>
  );
};

export default Description;
