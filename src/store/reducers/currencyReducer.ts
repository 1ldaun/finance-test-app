import { CurrencyAction, currencyActionTypes, CurrencyState } from "../../interfaces/currency";


const initialState: CurrencyState = {
    currencyList: undefined,
    loading: false,
};

export const currencyReducer = (state = initialState, action: CurrencyAction): CurrencyState => {
    switch (action.type) {
        case currencyActionTypes.FETCH_CURRENCY_LIST:
            return { loading: true, currencyList: initialState.currencyList };
        case currencyActionTypes.FETCH_CURRENCY_LIST_SUCCESS:
            return { loading: false, currencyList: action.payload?.rates };
        case currencyActionTypes.FETCH_CURRENCY_LIST_ERROR:
            return { loading: false, currencyList: initialState.currencyList };
        default:
            return state;
    }
};
