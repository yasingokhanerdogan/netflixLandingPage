import React from 'react';
import ReactDOM from 'react-dom/client';
import {GlobalStyles} from "./globalStyles";
import App from './app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <GlobalStyles/>
        <App/>
    </>
);