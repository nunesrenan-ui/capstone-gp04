import { useSelector } from "react-redux";
import CardItem from "../CardItem/index";

const Cart = () => {
  const cartItens = useSelector((state) => state.cart);

  return (
    <>
      {cartItens.map(({ produtoNome, produtoImg }, index) => (
        <CardItem key={index} nome={produtoNome} imagem={produtoImg} />
      ))}
    </>
  );
};

export default Cart;
