import React, { useMemo, useState } from "react";
import S from "./MainPage.module.scss";
import { symbols, SymbolType } from "../../assets/data/symbols";
import { currencyList, CurrencyListType } from "../../assets/data/currencyListMocks";
import CurrencyTable from "../../components/CurrencyTable/CurrencyTable";
import Converter from "../../components/Converter/Converter";

const MainPage = () => {
    const [currentSymbol, setCurrentSymbol] = useState<SymbolType>(SymbolType.RUB);

    const calculateCurrencyList = () => {
        const calculatedCurrencyList: CurrencyListType = {...currencyList.rates};
        Object.keys(symbols).map((symbol) => {
            calculatedCurrencyList[symbol as SymbolType] = currencyList.rates[currentSymbol] / currencyList.rates[symbol as SymbolType];
        })
        return calculatedCurrencyList;
    }

    const calculatedCurrencyList = useMemo<CurrencyListType>(() => calculateCurrencyList(), [currentSymbol])

    return (
        <div className={S.wrapper}>
            <Converter currencyList={currencyList.rates}/>
            <CurrencyTable calculatedCurrencyList={calculatedCurrencyList} currentSymbol={currentSymbol} setCurrentSymbol={setCurrentSymbol}/>
        </div>
    );
};

export default MainPage;
