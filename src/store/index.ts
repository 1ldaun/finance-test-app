import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { currencyReducer } from "./reducers/currencyReducer";


export const store = createStore(currencyReducer, applyMiddleware(thunk))
