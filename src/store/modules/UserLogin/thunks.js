import { dataLogin } from "./actions";
import jwt_decode from "jwt-decode";

export const dataLoginThunk = (data) => {
  return (dispatch, getState) => {
    let token = data.accessToken;
    let decoded = jwt_decode(token);
    console.log("jwt: ", decoded);
    console.log("token: ", token);
    let dataLog = {
      token: token,
      data: jwt_decode(token),
    };
    console.log("datalog", dataLog);
    dispatch(dataLogin(dataLog));
  };
};
