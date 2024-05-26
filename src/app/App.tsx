import { Route, Routes } from "react-router-dom";
import './styles/index.scss';
import { Link } from "react-router-dom";
import { Suspense, useContext, useState } from "react";
import { useTheme } from "app/providers/ThemeProvider";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { classNames } from "shared/lib/classNames";
import { AppRouter } from "./providers/router";


const App = () => {

    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Toggle</button>
            <Link  to={'/'}>Главная</Link>
            <Link  to={'/about'}>О сайте</Link>
            <AppRouter />
        </div>
    );
};

export default App;
