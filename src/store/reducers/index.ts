import { combineReducers } from "redux";
import { currencyReducer } from "./currencyReducer";


export const rootReducer = combineReducers({
    currencyList: currencyReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
