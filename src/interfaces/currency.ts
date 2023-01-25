export enum currencyActionTypes {
    FETCH_CURRENCY_LIST = "FETCH_CURRENCY_LIST",
}

export interface CurrencyState {
    currencyList: any[];
    loading: boolean;
}

interface FetchCurrencyAction {
    type: currencyActionTypes.FETCH_CURRENCY_LIST;
    payload?: any;
}

export type CurrencyAction = FetchCurrencyAction;
