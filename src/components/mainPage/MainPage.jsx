import React from 'react';




import Header from '../header/Header';
import MainBlock from '../mainBlock/MainBlock';
import InformationPanel from '../UI/informationPanel/InformationPanel';
import HelpInformation from '../helpInformation/HelpInformation';
import Fund from '../fund/Fund';
import Explanations from '../explanations/Explanations';
import Programs from '../programs/Programs';
import Team from '../team/Team';
import Statistics from '../statistics/Statistics';
import BeautifulInformationPanel from '../UI/beautifulInformationPanel/BeautifulInformationPanel';
import YourHelp from '../yourHelp/YourHelp';
import Documents from '../documents/Documents';
import Quote from '../quote/Quote';
import News from '../news/News';
import Footer from '../footer/Footer';




const MainPage = ({yourHelpBackground, quoteBackground}) => {
    return (
        <div>
            <MainBlock />
            
            <InformationPanel>
                <HelpInformation />
            </InformationPanel>

            <Fund />

            <InformationPanel>
                <Explanations />
            </InformationPanel>

            <Programs />


            


            <div className='nonePhone'>
                < InformationPanel >
                    <Statistics />
                </InformationPanel >
            </div>


            
            <div className='team'>
                <Team />
                < BeautifulInformationPanel background={yourHelpBackground} >
                    <YourHelp />
                </BeautifulInformationPanel >
            </div>

            <div className='nonePhone documents'>
                <Documents />
                < BeautifulInformationPanel background={quoteBackground} >
                    <Quote />
                </BeautifulInformationPanel >
            </div>



            <News />

           





            {/* <Header />
        
            <MainBlock />

            <InformationPanel>
                <HelpInformation />
            </InformationPanel>

            <Fund />


            <InformationPanel>
                <Explanations />
            </InformationPanel>

            <Programs />

            <div className='nonePhone'>
                < InformationPanel >
                    <Statistics />
                </InformationPanel >
            </div>



            <div className='team'>
                <Team />
                < BeautifulInformationPanel background={yourHelpBackground} >
                    <YourHelp />
                </BeautifulInformationPanel >
            </div>

            <div className='nonePhone documents'>
                <Documents />
                < BeautifulInformationPanel background={quoteBackground} >
                    <Quote />
                </BeautifulInformationPanel >
            </div>



            <News />

            <Footer /> */}

        </div>
    )
}

export default MainPage;