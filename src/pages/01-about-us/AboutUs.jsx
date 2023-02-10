import React from 'react';
import styleNames from './styleNames.module.css';
import InformationPanel from '../../components/informationPanel/InformationPanel';
import AboutFund from '../../components/aboutFund/AboutFund';
import Volunteers from '../../components/volunteers/Volunteers';

const AboutUs = () => {
    return (
        <div>
            <InformationPanel>
                <div className='titlePage'>О фонде “Марьям”</div>
            </InformationPanel>
            <AboutFund />
            <Volunteers />
        </div>
    )
}

export default AboutUs;