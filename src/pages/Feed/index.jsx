import CardSearch from "../../components/CardSearch";
import CardItem from "../../components/CardItem";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../../components/Footer";

const Feed = () => {
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
      <CardSearch />
      <CardItem />
      <Footer />
    </motion.div>
  );
};

export default Feed;

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
