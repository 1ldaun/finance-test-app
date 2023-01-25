import { SymbolType } from "../assets/data/symbols";

export enum currencyActionTypes {
    FETCH_CURRENCY_LIST = "FETCH_CURRENCY_LIST",
    FETCH_CURRENCY_LIST_SUCCESS = "FETCH_CURRENCY_LIST_SUCCESS",
    FETCH_CURRENCY_LIST_ERROR = "FETCH_CURRENCY_LIST_ERROR",
}

export interface CurrencyState {
    currencyList?: CurrencyListType;
    loading: boolean;
}

interface FetchCurrencyListAction {
    type: currencyActionTypes.FETCH_CURRENCY_LIST;
    payload?: CurrencyListI;
}

interface FetchCurrencyListSuccessAction {
    type: currencyActionTypes.FETCH_CURRENCY_LIST_SUCCESS;
    payload?: CurrencyListI;
}

interface FetchCurrencyListErrorAction {
    type: currencyActionTypes.FETCH_CURRENCY_LIST_ERROR;
    payload?: string;
}

export type CurrencyAction = FetchCurrencyListAction | FetchCurrencyListSuccessAction | FetchCurrencyListErrorAction;

export type CurrencyListType = {
    -readonly [key in keyof typeof SymbolType]: number;
}

export interface CurrencyListI {
    base: string;
    date: string;
    historical: boolean;
    rates: CurrencyListType;
    success: boolean;
    timestamp: number;
}
