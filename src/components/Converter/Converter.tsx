import React, { useMemo, useState } from "react";
import S from "./Converter.module.scss";
import { Dropdown } from "../Dropdown/Dropdown";
import { symbols, SymbolType } from "../../assets/data/symbols";
import arrowSvg from "../../assets/img/arrow-right.svg";
import { CurrencyListType } from "../../assets/data/currencyListMocks";

export interface ConverterProps {
    currencyList: CurrencyListType;
}

const Converter: React.FC<ConverterProps> = ({currencyList}) => {
    const [value, setValue] = useState(0);
    const [selectedFromItem, setSelectedFromItem] = useState<SymbolType | null>(null);
    const [selectedToItem, setSelectedToItem] = useState<SymbolType | null>(null);

    const calculateResult = () => {
        if (selectedFromItem && selectedToItem)
            return value * currencyList[selectedToItem] / currencyList[selectedFromItem];
    };

    const convertedResult = useMemo(() => calculateResult(), [selectedFromItem, selectedToItem, value])


    return (
        <div className={S.wrapper}>
            <Dropdown symbolsList={Object.keys(symbols) as SymbolType[]} selectedItem={selectedFromItem}
                      setSelectedItem={setSelectedFromItem} />
            <input type="number" onChange={(e) => setValue(parseInt((e.target.value)))} value={value}
                   className={S.numericInput} />
            <img src={arrowSvg} alt="arrow" />
            <Dropdown symbolsList={Object.keys(symbols) as SymbolType[]} selectedItem={selectedToItem}
                      setSelectedItem={setSelectedToItem} />
            <input disabled type="number" value={convertedResult} className={S.numericInput} />
        </div>
    );
};

export default Converter;
