import CardSearch from "../../components/CardSearch";
import CardItem from "../../components/CardItem";

import { Link, useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../../components/Footer";
import { useEffect } from "react";
import { Header, Container } from "./style";
import { useSelector } from "react-redux";
const Feed = () => {
  const history = useHistory();
  const checkToken = useSelector((state) => state.loginData.token);

  useEffect(() => {
    if (!checkToken) {
      history.push("/");
    }
  }, [checkToken]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Container>
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
      </Container>
    </motion.div>
  );
};

export default Feed;
