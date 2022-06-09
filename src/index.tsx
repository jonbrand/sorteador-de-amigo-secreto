import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Header } from './components/Header/Header';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
