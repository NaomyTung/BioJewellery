import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import { createRoot } from 'react-dom/client';
const root = createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </ BrowserRouter>
        </Provider>
    </React.StrictMode>
)