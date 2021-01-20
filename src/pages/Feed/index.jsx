import CardSearch from "../../components/CardSearch";
import CardItem from "../../components/CardItem";
import { useHistory } from "react-router-dom";
import HeaderAll from "../../components/Header";
import { motion } from "framer-motion";
import FooterAll from "../../components/Footer";
import { useEffect } from "react";
import { Container } from "./style";
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
        <HeaderAll />
        <CardSearch />
        <CardItem />
        <FooterAll />
      </Container>
    </motion.div>
  );
};

export default Feed;
