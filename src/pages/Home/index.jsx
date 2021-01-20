import HomePageCard from "../../components/HomePageCard/";
import AboutGiver from "../../components/AboutGiver";
import { HomePageLayout, ScrollDownHome } from "./styles";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";

const HomePage = () => { 

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
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
      <HomePageLayout>
        <HomePageCard />
      </HomePageLayout>
      <ScrollDownHome>
        <div id="section2">
          <AboutGiver />
        </div>
       </ScrollDownHome> 
      <Footer />
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
    margin: 0 1%;
  }
`;
