import CardSearch from "../../components/CardSearch";
import CardItem from "../../components/CardItem";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../../components/Footer";

import { BodyPage, Header, DivContainer } from "./style";

const Feed = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Header>
        {/* AQUI VAI TERNARIO PARA SE ESTIVER LOGADO */}
        <div>
          <Link to="/cadastro">Seja um doador</Link>
        </div>
        <div>
          <Link to="/login">Login</Link>
        </div>
      </Header>
      <DivContainer>
        <BodyPage>
          <CardSearch />
          <CardItem />
        </BodyPage>
      </DivContainer>
      <Footer />
    </motion.div>
  );
};

export default Feed;
