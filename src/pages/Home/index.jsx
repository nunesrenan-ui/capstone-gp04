import styled from "styled-components";

import { HomePageLayout, ScrollDownHome } from "./styles";
import HomePageCard from "../../components/HomePageCard";
import AboutGiver from "../../components/AboutGiver";

import { Link } from "react-router-dom";
import FooterAll from "../../components/Footer";
import { motion } from "framer-motion";
import HeaderAll from "../../components/Header";

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* <Header>
       
      <div>
        <Link to="/cadastro">Seja um doador</Link>
      </div>
      <div>
        <Link to="/login">Login</Link>
      </div>
      </Header> */}
      <HeaderAll></HeaderAll>
      <HomePageLayout>
        <HomePageCard />
      </HomePageLayout>
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
