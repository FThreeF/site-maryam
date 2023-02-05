import React, { useRef } from 'react';
import './App.css';
import Header from './components/header/Header.jsx';
import HelpInformation from './components/helpInformation/HelpInformation';
import MainBlock from './components/mainBlock/MainBlock';
import BeautifulInformationPanel from './components/UI/beautifulInformationPanel/BeautifulInformationPanel';
import InformationPanel from './components/UI/informationPanel/InformationPanel';
import yourHelpBackground from './source/yourHelpBackground.png';
import quoteBackground from './source/quoteBackground.png';
import YourHelp from './components/yourHelp/YourHelp';
import Footer from './components/footer/Footer';
import Explanations from './components/explanations/Explanations';
import Statistics from './components/statistics/Statistics';
import Quote from './components/quote/Quote';
import BeautifulTitle from './components/UI/beautifulTitle/BeautifulTitle';
import Fund from './components/fund/Fund';
import Programs from './components/programs/Programs';
import Team from './components/team/Team';
import Documents from './components/documents/Documents';
import News from './components/news/News';


const App = () => {




  return (
    <div className="app">

      <Header />
      <MainBlock />

      <InformationPanel>
        <HelpInformation />
      </InformationPanel>

      <Fund />


      <InformationPanel>
        <Explanations />
      </InformationPanel>

      <Programs />

      < InformationPanel >
        <Statistics />
      </InformationPanel >

      <Team />

      < BeautifulInformationPanel background={yourHelpBackground} >
        <YourHelp />
      </BeautifulInformationPanel >

      <Documents />

      < BeautifulInformationPanel background={quoteBackground} >
        <Quote />
      </BeautifulInformationPanel >

      <News />

      < Footer />
    </div >
  )
}

export default App;