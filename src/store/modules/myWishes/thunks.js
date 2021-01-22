import { wishesCart } from "./actions";

export const wishesCartThunk = (produto, id) => {
  return (dispatch, getState) => {
    let item = {
      produtoNome: produto.type,
      produtoId: produto.id,
      userId: id.sub,
    };
    dispatch(wishesCart(item));
  };
};

export default wishesCartThunk;
