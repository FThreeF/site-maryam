import React from 'react';
import styleNames from './InformationPanel.module.css';

const InformationBar = ({ children, ...props }) => {
    return (
        <div className={styleNames.block}>
            <div className={`${styleNames.container} container`}>
                {children}
            </div>
        </div>
    )
}

export default InformationBar;