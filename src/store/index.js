import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import loginReducer from "./modules/UserLogin/reducers";
import donationReducer from "./modules/AddDonation/reducers";
import productsReducer from "./modules/Products/reducers";

const reducers = combineReducers({
  loginData: loginReducer,
  donation: donationReducer,
  products: productsReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
