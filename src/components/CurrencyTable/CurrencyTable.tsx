import React, { useState } from "react";
import { SymbolType } from "../../assets/data/symbols";
import { CurrencyListType } from "../../assets/data/currencyListMocks";
import S from "./CurrencyTable.module.scss";
import arrowUp from "../../assets/img/arrow-up.svg";
import arrowDown from "../../assets/img/arrow-down.svg";

export interface CurrencyTableProps {
    currentSymbol: SymbolType;
    setCurrentSymbol: React.Dispatch<React.SetStateAction<SymbolType>>;
    calculatedCurrencyList: CurrencyListType;
}

enum SortByParams {
    SYMBOL = "SYMBOL",
    CURRENCY = "CURRENCY",
}

const DEFAULT_DIGITS_PARAM = 4;
const DIGITS_MIN = 0;
const DIGITS_MAX = 10;

const CurrencyTable: React.FC<CurrencyTableProps> = ({ currentSymbol, setCurrentSymbol, calculatedCurrencyList }) => {
    const [digitsParam, setDigitParam] = useState(DEFAULT_DIGITS_PARAM);
    const [sortedList, setSortedList] = useState(Object.keys(calculatedCurrencyList));
    const [sortByParam, setSortParam] = useState<SortByParams>(SortByParams.SYMBOL);
    const [isSortAscending, setIsSortAscending] = useState(false);

    const changeSort = (param: SortByParams) => {
        if (sortByParam === param) {
            setIsSortAscending(!isSortAscending);
            setSortedList(sortedList.reverse());
        } else {
            setSortParam(param);
            if (param === SortByParams.SYMBOL)
                setSortedList(sortedList.sort());
            else
                setSortedList(sortedList.sort((x, y) => calculatedCurrencyList[y as SymbolType] - calculatedCurrencyList[x as SymbolType]));
        }
    };

    const getArrowImg = () => {
        return isSortAscending ? arrowUp : arrowDown;
    };


    return (
        <div className={S.wrapper}>
            <div className={S.params}>
                <p className={S.currentSymbol}>Current symbol: {currentSymbol}</p>
                <span>Digits param:</span>
                <input type="number" min={DIGITS_MIN} max={DIGITS_MAX} value={digitsParam} onChange={e => setDigitParam(parseInt(e.target.value))} />
            </div>
            <table className={S.table}>
                <thead>
                <tr>
                    <th onClick={() => changeSort(SortByParams.SYMBOL)} className={S.symbolColumn}>
                        Symbol
                        {sortByParam === SortByParams.SYMBOL ? <img src={getArrowImg()} alt="sort-order" /> : ""}
                    </th>
                    <th onClick={() => changeSort(SortByParams.CURRENCY)} className={S.currencyColumn}>
                        Currency
                        {sortByParam === SortByParams.CURRENCY ? <img src={getArrowImg()} alt="sort-order" /> : ""}
                    </th>
                </tr>
                </thead>
                <tbody>
                {sortedList.map(symbol => (
                    <tr key={symbol}>
                        <td onClick={() => setCurrentSymbol(symbol as SymbolType)}
                            className={S.symbolColumn}>{symbol}</td>
                        <td className={S.currencyColumn}>{calculatedCurrencyList[symbol as SymbolType].toFixed(digitsParam)}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default CurrencyTable;
