import React from 'react';
import styleNames from './styleNames.module.css';



import MainBlock from '../../components/mainBlock/MainBlock';
import InformationPanel from '../../components/informationPanel/InformationPanel';
import HelpInformation from '../../components/helpInformation/HelpInformation';
import Fund from '../../components/fund/Fund';
import Explanations from '../../components/explanations/Explanations';
import Programs from '../../components/programs/Programs';
import Team from '../../components/team/Team';
import Statistics from '../../components/statistics/Statistics';
import BeautifulInformationPanel from '../../components/beautifulInformationPanel/BeautifulInformationPanel';
import YourHelp from '../../components/yourHelp/YourHelp';
import Documents from '../../components/documents/Documents';
import Quote from '../../components/quote/Quote';
import News from '../../components/news/News';
import PanelWantHelp from '../../components/panelWantHelp/PanelWantHelp';





const Start = ({yourHelpBackground, quoteBackground}) => {
    return (
        <div>
            {/* <PanelWantHelp /> */}

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

export default Start;