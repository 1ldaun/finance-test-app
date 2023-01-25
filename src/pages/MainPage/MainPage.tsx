import React, { useEffect, useMemo, useState } from "react";
import S from "./MainPage.module.scss";
import { symbols, SymbolType } from "../../assets/data/symbols";
import { currencyListMocks } from "../../assets/data/currencyListMocks";
import CurrencyTable from "../../components/CurrencyTable/CurrencyTable";
import Converter from "../../components/Converter/Converter";
import { useTypedSelector } from "../../store/hooks/useTypedSelector";
import { useActions } from "../../store/hooks/useActions";
import { CurrencyListType } from "../../interfaces/currency";

const MainPage = () => {
    const { currencyList, loading } = useTypedSelector(state => state.currencyList);
    const { fetchCurrencyList } = useActions();

    const [currentSymbol, setCurrentSymbol] = useState<SymbolType>(SymbolType.RUB);
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]);

    const calculateCurrencyList = () => {
        const calculatedCurrencyList: CurrencyListType = { ...currencyListMocks.rates };
        if (currencyList) {
            Object.keys(symbols).forEach((symbol) => {
                calculatedCurrencyList[symbol as SymbolType] = currencyList[currentSymbol] / currencyList[symbol as SymbolType];
            });
        }
        return calculatedCurrencyList;
    };

    const calculatedCurrencyList = useMemo<CurrencyListType | undefined>(() => calculateCurrencyList(), [currentSymbol, currencyList]);

    useEffect(() => {
        fetchCurrencyList(selectedDate);
    }, [selectedDate]);

    return (
        <div className={S.wrapper}>
            {loading ? <div>loading...</div> :
                <>
                <Converter currencyList={currencyList} />
                <CurrencyTable calculatedCurrencyList={calculatedCurrencyList} currentSymbol={currentSymbol}
                               setCurrentSymbol={setCurrentSymbol} selectedDate={selectedDate}
                               setSelectedDate={setSelectedDate} />
                </>
            }
        </div>
    );
};

export default MainPage;
