import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProvider } from './context/appContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
    <AppProvider>
        <App />
    </AppProvider>
);