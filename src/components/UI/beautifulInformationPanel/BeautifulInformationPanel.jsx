import React from 'react';
import styleNames from './BeautifulInformationPanel.module.css';

const BeautifulInformationPanel = ({children, background}) => {
    return (
        <div className={styleNames.block}>
            <img className={styleNames.background} src={background} alt="background" />
            <div className={`${styleNames.container} container`}>
                {children}
            </div>
        </div>
    )
}

export default BeautifulInformationPanel;