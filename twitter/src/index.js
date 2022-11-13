import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import Profile from './pages/Profile/Profile';
import Home from './pages/Home/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
  <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/profile' element={ <Profile />}></Route>
  </Routes>
  </React.StrictMode>
  </BrowserRouter>
);

