import CardSearch from "../../components/CardSearch";
import CardItem from "../../components/CardItem";
import { useHistory } from "react-router-dom";
import HeaderAll from "../../components/Header";
import { motion } from "framer-motion";
import FooterAll from "../../components/Footer";
import { useEffect } from "react";
import { Container, CardContainer } from "./style";
import { useSelector } from "react-redux";
import axios from "axios";
import { useDispatch } from "react-redux";
import { dataProductsThunk } from "../../store/modules/Products/thunks";

const Feed = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  // const checkToken = useSelector((state) => state.loginData.token);
  const localToken = localStorage.getItem("authToken");

  useEffect(() => {
    if (!localToken) {
      history.push("/");
    }
  }, [localToken]);

  useEffect(() => {
    axios
      .get("https://api-capstone-grupo04.herokuapp.com/produtos")
      .then((res) => dispatch(dataProductsThunk(res.data)))
      .catch((err) => console.log(err));
  }, []);

  const products = useSelector((state) => state.products); //variavel com array de produtos
  console.log(products);

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
        <FooterAll />
      </Container>
    </motion.div>
  );
};

export default Feed;
