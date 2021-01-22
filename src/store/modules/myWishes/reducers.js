const wishesCartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, action.data];

    default:
      return state;
  }
};

export default wishesCartReducer;
