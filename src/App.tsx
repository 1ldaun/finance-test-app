import React, { useEffect } from "react";
import MainPage from "./pages/MainPage/MainPage";
import { Provider } from "react-redux";
import { store } from "./store";
import S from "./App.module.scss";
import { useTranslation } from "react-i18next";
import "./i18n";

function App() {
    const { i18n } = useTranslation();

    useEffect(() => {
        i18n.changeLanguage(navigator.language.slice(0, 2));
    }, []);

    return (
        <Provider store={store}>
            <div
                onClick={() => i18n.changeLanguage(i18n.language === "en" ? "ru" : "en")}
                className={S.changeLanguage}
            >
                {i18n.language === "en" ? "RU" : "EN"}
            </div>
            <MainPage />
        </Provider>
    );
}

export default App;
