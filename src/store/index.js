import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import loginReducer from "./modules/UserLogin/reducers";
import donationReducer from "./modules/AddDonation/reducers";

const reducers = combineReducers({
  loginData: loginReducer,
  donation: donationReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
