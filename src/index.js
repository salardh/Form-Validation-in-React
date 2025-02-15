import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import FormValidation from './Components/Form-Validation/Form-Validation';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <FormValidation />
  </React.StrictMode>
);