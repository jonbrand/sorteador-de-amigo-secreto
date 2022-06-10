import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Header } from './components/Header/Header';
import { HeroSection} from './components/HeroSection/HeroSection';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <HeroSection />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
