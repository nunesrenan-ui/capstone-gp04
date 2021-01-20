import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import loginReducer from "./modules/UserLogin/reducers";

const reducers = combineReducers({
  loginData: loginReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
