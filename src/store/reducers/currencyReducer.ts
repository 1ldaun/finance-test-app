import { CurrencyAction, currencyActionTypes, CurrencyState } from "../../interfaces/currency";


const initialState: CurrencyState = {
    currencyList: [],
    loading: false,
};

export const currencyReducer = (state = initialState, action: CurrencyAction): CurrencyState => {
    switch (action.type) {
        case currencyActionTypes.FETCH_CURRENCY_LIST:
            return { loading: true, currencyList: action.payload };
        default:
            return state;
    }
};
