import React from 'react';
import styleNames from './ProgramSelection.module.css';

import BeautifulTitle from '../beautifulTitle/BeautifulTitle';

const ProgramSelection = () => {
    return (
        <div className={styleNames.block}>
            <div className={`${styleNames.container} container`}>
                <BeautifulTitle>Выберите программу</BeautifulTitle>
                <div className={styleNames.text}>Наша цель — помочь как можно большему количеству нуждающихся</div>
            </div>
        </div>
    )
}

export default ProgramSelection;