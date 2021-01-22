import { useSelector } from "react-redux";
import CardItem from "../CardItem/index";
import { Container } from "./style";

const Cart = () => {
  const cartItens = useSelector((state) => state.cart);

  return (
    <>
      <Container>
        {cartItens.map(({ produtoNome, produtoImg }, index) => (
          <CardItem key={index} nome={produtoNome} imagem={produtoImg} />
        ))}
      </Container>
    </>
  );
};

export default Cart;
