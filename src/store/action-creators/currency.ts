import { CurrencyAction, currencyActionTypes } from "../../interfaces/currency";
import { Dispatch } from "redux";
import axios from "axios";
import { symbolsInRow } from "../../assets/data/symbols";

export const fetchCurrencyList = (date?: string) => {
    return async (dispatch: Dispatch<CurrencyAction>) => {
        const CURRENT_DAY = new Date().toISOString().split("T")[0];
        try {
            dispatch({ type: currencyActionTypes.FETCH_CURRENCY_LIST });
            const response = await axios.get("https://api.apilayer.com/fixer/" + (date ? date : CURRENT_DAY) + "?symbols=" + symbolsInRow + "&base=RUB", { headers: { apiKey: "EDpDS3117z4YyTlfqzkRcq7JIeOyJ35K" } });
            dispatch({ type: currencyActionTypes.FETCH_CURRENCY_LIST_SUCCESS, payload: response.data });
        } catch (e) {
            dispatch({ type: currencyActionTypes.FETCH_CURRENCY_LIST_ERROR, payload: "Error" });
        }
    };
};
