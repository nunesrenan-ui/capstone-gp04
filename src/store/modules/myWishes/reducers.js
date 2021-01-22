const wishesCartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [{ ...action.data, state }];

    default:
      return state;
  }
};

export default wishesCartReducer;
