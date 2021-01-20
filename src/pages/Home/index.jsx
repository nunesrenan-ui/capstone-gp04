import styled from "styled-components";
import Centerlayer from "../../components/Modal/index";

import { HomePageLayout, ScrollDownHome } from "./styles";
import HomePageCard from "../../components/HomePageCard";
import AboutGiver from "../../components/AboutGiver";

import { Link } from "react-router-dom";
import FooterAll from "../../components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import CardLogin from "../../components/CardLogin";
import CardRegister from "../../components/CardRegister";

const HomePage = () => {
  const [showContainer, setShowContainer] = useState(true);

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
          <Centerlayer setShowContainer={setShowContainer} title="Login">
            <CardLogin />
          </Centerlayer>
          {/* <Link to="/cadastro">Seja um doador</Link> */}
        </div>
        <div>
          <Centerlayer
            setShowContainer={setShowContainer}
            title="Seja um doador"
          >
            <CardRegister />
          </Centerlayer>
          {/* <Link to="/login">Login</Link> */}
        </div>
      </Header>
      <HomePageLayout>{showContainer && <HomePageCard />}</HomePageLayout>
      <ScrollDownHome>
        <AboutGiver />
      </ScrollDownHome>
      <FooterAll />
    </motion.div>
  );
};

export default HomePage;

export const Header = styled.div`
  width: 100%;
  height: 5vh;
  background-color: #ff9f1c;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  div {
    margin: 0 1.5%;
  }
`;
