import React, { useRef } from 'react';
import './App.css';

import yourHelpBackground from './source/yourHelpBackground.png';
import quoteBackground from './source/quoteBackground.png';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import NavMenu from './components/navMenu/NavMenu';
import Header from './components/header/Header';
import Start from './pages/00-start/Start';
import AboutUs from './pages/01-about-us/AboutUs';
import HowToHelp from './pages/02-how-to-help/HowToHelp';
import Footer from './components/footer/Footer';



const App = () => {







  return (
    <BrowserRouter>

      <div className="app">
        <Routes>
          
          <Route path='/site-maryam' element={<Header />} />
          <Route path='/aboutUs' element={<NavMenu />} />
          <Route path='/howToHelp' element={<NavMenu />} />

        </Routes>
    
        <Routes>
          <Route path='/site-maryam' element={<Start yourHelpBackground={yourHelpBackground} quoteBackground={quoteBackground} />} />
          <Route path='/aboutUs' element={<AboutUs />} />
          <Route path='/howToHelp' element={<HowToHelp />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter >
  )
}

export default App;