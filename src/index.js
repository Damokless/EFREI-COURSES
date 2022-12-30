import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import './index.css';
import App from './routes/App';
import Favoris from './routes/Favoris';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="favoris" element={<Favoris />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root'),
);
