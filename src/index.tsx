import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Header } from './components/Header/Header';
import { Card } from './components/Card/Card';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Card />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
