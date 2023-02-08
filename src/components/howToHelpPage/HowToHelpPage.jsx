import React from 'react';
import NavMenu from '../navMenu/NavMenu';
import InformationPanel from '../UI/informationPanel/InformationPanel';
import styleNames from './HowToHelpPage.module.css';

const HowToHelpPage = () => {
    return (
        <div>
            <InformationPanel>
                <div className='titlePage'>Как помочь</div>
            </InformationPanel>
        </div>
    )
} 

export default HowToHelpPage;