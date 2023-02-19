import React from 'react';
import styleNames from './styleNames.module.css';
import InformationPanel from '../../components/informationPanel/InformationPanel';
import AboutFund from '../../components/aboutFund/AboutFund';
import Volunteers from '../../components/volunteers/Volunteers';
import PanelDonates from '../../components/panelDonates/PanelDonates';

const AboutUs = () => {
    return (
        <div>
            <PanelDonates />
            <InformationPanel>
                <div className='titlePage'>О фонде “Марьям”</div>
            </InformationPanel>
            <AboutFund />
            <Volunteers />
        </div>
    )
}

export default AboutUs;