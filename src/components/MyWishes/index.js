import { useSelector } from "react-redux";
import CardItem from "../CardItem/index";

const Cart = () => {
  const cartItens = useSelector((state) => state.cart);

  return (
    <>
      {cartItens.map(({ type, frontSide }) => (
        <CardItem nome={type} imagem={frontSide} />
      ))}
    </>
  );
};

export default Cart;
