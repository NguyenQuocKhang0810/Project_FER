import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import ThemeProvider from './utils/ThemeContext';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <ThemeProvider>
                <GoogleOAuthProvider clientId='384062917946-cs8l14of29flgvl689p4pb98tef9freg.apps.googleusercontent.com'>
                    <App />
                </GoogleOAuthProvider>    
            </ThemeProvider>
        </Router>
    </React.StrictMode>
);
