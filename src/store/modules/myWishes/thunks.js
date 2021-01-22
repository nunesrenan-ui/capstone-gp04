import { wishesCart } from "./actions";

export const wishesCartThunk = (produto, id) => {
  return (dispatch, getState) => {
    let item = {
      produtoNome: produto.type,
      produtoImg: produto.frontSide,
      produtoId: produto.id,
      userId: id.sub,
    };
    console.log("thunkcart", item);
    dispatch(wishesCart({ ...item }));
  };
};

export default wishesCartThunk;
