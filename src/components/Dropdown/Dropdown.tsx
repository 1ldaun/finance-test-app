import React, { useState } from "react";
import S from "./Dropdown.module.scss";
import cx from "classnames";
import { SymbolType } from "../../assets/data/symbols";


interface DropdownProps {
    symbolsList: SymbolType[];
    selectedItem: SymbolType | null;
    setSelectedItem: React.Dispatch<React.SetStateAction<SymbolType | null>>;
}

export const Dropdown: React.FC<DropdownProps> = ({symbolsList, selectedItem, setSelectedItem}) => {
    const [isOpen, setOpen] = useState(false);

    const toggleDropdown = () => setOpen(!isOpen);

    const handleItemClick = (id: SymbolType) => {
        setOpen(false);
        selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
    };

    return (
        <div className={S.dropdown}>
            <div className={S.dropdown__header} onClick={toggleDropdown}>
                {selectedItem ? symbolsList?.find(symbol => symbol == selectedItem) : "Select currency"}
                <i className={cx("fa fa-chevron-right icon", isOpen ? S.open : "")}></i>
            </div>
            <div className={cx(S.dropdown__body, isOpen ? S.open : "")}>
                {symbolsList.map(symbol => (
                    <div className={S.dropdown__item} onClick={() => handleItemClick(symbol)} key={symbol} id={symbol}>
                        <span className={cx(S.dropdown__itemDot, symbol == selectedItem ? S.selected : "")}>• </span>
                        {symbol}
                    </div>
                ))}
            </div>
        </div>
    );
};
