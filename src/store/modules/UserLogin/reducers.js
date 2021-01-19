const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case "DATA_LOGIN":
      const { dataLogin } = action;
      return { ...state, ...dataLogin };

    default:
      return state;
  }
};

export default loginReducer;
