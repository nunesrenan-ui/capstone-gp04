const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case "DATA_LOGIN":
      return { ...state, ...action.data };
<<<<<<< HEAD
=======

>>>>>>> ea7a1cf2c331515205f4219222be9fa2845adaba
    default:
      return state;
  }
};

export default loginReducer;
