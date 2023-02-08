import React from 'react';
import styleNames from './AboutUsPage.module.css';

import NavMenu from '../navMenu/NavMenu';
import InformationPanel from '../UI/informationPanel/InformationPanel';
import AboutFund from '../aboutFund/AboutFund';


const AboutUsPage = () => {
    return (
        <div>
            <InformationPanel>
                <div className='titlePage'>О фонде “Марьям”</div>
            </InformationPanel>
            <AboutFund />
        </div>
    )
}

export default AboutUsPage;