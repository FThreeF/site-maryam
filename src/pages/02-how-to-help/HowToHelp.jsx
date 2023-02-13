import React from 'react';
import styleNames from './styleNames.module.css';

import InformationPanel from '../../components/informationPanel/InformationPanel';
import ProgramSelection from '../../components/programSelection/ProgramSelection';
import DonationBoxec from '../../components/donationBoxes/DonationBoxes';

const HowToHelp = () => {
    return (
        <div>
            <InformationPanel>
                <div className='titlePage'>Как помочь</div>
            </InformationPanel>
            <ProgramSelection />
            <DonationBoxec />
        </div>
    )
} 

export default HowToHelp;