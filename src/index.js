import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Headtop from './component/header';
import Headbottom from './component/header-bottom';
import Fotter from './component/fotter';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rfottor from './component/responsive-footer';
import Home from './component/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './inner_page/About';
import Contact from './inner_page/contact';
import Sidemap from './inner_page/side-map';
import Account from './inner_page/account';
import Blogmain from './inner_page/blog-main';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
    <Headtop />
      <Headbottom />
      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Sidemap" element={<Sidemap />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/Blog" element={<Blogmain />} />
      </Routes>
      <Fotter />
      <Rfottor />
    </BrowserRouter>
  </>
);


