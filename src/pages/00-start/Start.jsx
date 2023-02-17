import React from 'react';
import styleNames from './styleNames.module.css';



import MainBlock from '../../components/mainBlock/MainBlock';
import InformationPanel from '../../components/informationPanel/InformationPanel';
import HelpInformation from '../../components/helpInformation/HelpInformation';
import Fund from '../../components/fund/Fund';
import Explanations from '../../components/explanations/Explanations';
import Team from '../../components/team/Team';
import Statistics from '../../components/statistics/Statistics';
import BeautifulInformationPanel from '../../components/beautifulInformationPanel/BeautifulInformationPanel';
import YourHelp from '../../components/yourHelp/YourHelp';
import Documents from '../../components/documents/Documents';
import Quote from '../../components/quote/Quote';
import News from '../../components/news/News';
import PanelWantHelp from '../../components/panelWantHelp/PanelWantHelp';
import PanelNeedHelp from '../../components/panelNeedHelp/PanelNeedHelp';
import PanelArchive from '../../components/panelArchive/PanelArchive';


import image1 from './programsImage1.png';
import image2 from './programsImage2.png';
import ProgramSelection from '../../components/programSelection/ProgramSelection';
import DonationBoxec from '../../components/donationBoxes/DonationBoxes';


const Start = ({ yourHelpBackground, quoteBackground }) => {


    let info = [
        {
            img: image1,
            title: '«Здоровое будущее — особым детям!»',
            text: 'Cодействие в оплате курсов реабилитации и абилитации для подопечных детей. Приобретение для детей-сирот, детей, оставшихся без попечения родителей, детей-инвалидов необходимых для их жизнедеятельности лекарственных препаратов и медицинского оборудования',
        },
        {
            img: image2,
            title: '"Социальная адаптация детей сирот и детей, оставшихся без попечения родителей"',
            text: 'Реализация целей и задач данной программы заключается в вовлечении детей-сирот и детей, оставшихся без попечения родителей, в активную социальную жизнь и организации посещения детьми различных развивающих занятий',
        },
        {
            img: image1,
            title: '«Здоровое будущее — особым детям!»',
            text: 'Cодействие в оплате курсов реабилитации и абилитации для подопечных детей. Приобретение для детей-сирот, детей, оставшихся без попечения родителей, детей-инвалидов необходимых для их жизнедеятельности лекарственных препаратов и медицинского оборудования',
        },
        {
            img: image2,
            title: '"Социальная адаптация детей сирот и детей, оставшихся без попечения родителей"',
            text: 'Реализация целей и задач данной программы заключается в вовлечении детей-сирот и детей, оставшихся без попечения родителей, в активную социальную жизнь и организации посещения детьми различных развивающих занятий',
        }
    ]



    return (
        <div>
            <PanelWantHelp />
            <PanelNeedHelp />
            <PanelArchive />

            <MainBlock />

            <InformationPanel>
                <HelpInformation />
            </InformationPanel>

            <Fund />

            <InformationPanel>
                <Explanations />
            </InformationPanel>


            <ProgramSelection 
            info={info} 
            big={false} 
            titlePC={'Выберите программу'}
            titleMobile={'Программы'}
            textPC={'Наша цель — помочь как можно большему количеству нуждающихся'}
            textMobile={'Выберите программу, которой хотите помочь'}
            />


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