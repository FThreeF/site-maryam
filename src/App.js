import React, { useRef } from 'react';
import './App.css';

import yourHelpBackground from './source/yourHelpBackground.png';
import quoteBackground from './source/quoteBackground.png';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './components/mainPage/MainPage';
import AboutUsPage from './components/aboutUsPage/AboutUsPage';
import HowToHelpPage from './components/howToHelpPage/HowToHelpPage';
import Footer from './components/footer/Footer';
import NavMenu from './components/navMenu/NavMenu';
import Header from './components/header/Header';



const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path='*' element={<Header />} />
          <Route path='/aboutUs' element={<NavMenu />} />
          <Route path='/howToHelp' element={<NavMenu />} />
        </Routes>
    
        <Routes>
          <Route path='*' element={<MainPage yourHelpBackground={yourHelpBackground} quoteBackground={quoteBackground} />} />
          <Route path='/aboutUs' element={<AboutUsPage />} />
          <Route path='/howToHelp' element={<HowToHelpPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;