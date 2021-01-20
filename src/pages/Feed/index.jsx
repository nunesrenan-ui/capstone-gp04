import CardSearch from "../../components/CardSearch";
import CardItem from "../../components/CardItem";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../../components/Footer";

<<<<<<< HEAD
import { Header, DivContainerCards, DivSearch, Container } from "./style";
=======
import { Header, Container } from "./style";
>>>>>>> b856b40a5f069aa75752f1a6c86b4b606ee3075a

const Feed = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
<<<<<<< HEAD
      <Header>
        {/* AQUI VAI TERNARIO PARA SE ESTIVER LOGADO */}
        <div>
          <Link to="/cadastro">Seja um doador</Link>
        </div>
        <div>
          <Link to="/login">Login</Link>
        </div>
      </Header>

      <Container>
        <CardSearch />

        <DivContainerCards>
          <CardItem />
        </DivContainerCards>
      </Container>

      <Footer />
=======
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
>>>>>>> b856b40a5f069aa75752f1a6c86b4b606ee3075a
    </motion.div>
  );
};

export default Feed;
