import React from 'react';
import styleNames from './InformationPanel.module.css';

const InformationPanel = ({ children, ...props }) => {
    return (
        <div className={`${styleNames.block} zoom`}>
            <div className={`${styleNames.container} container`}>
                {children}
            </div>
        </div>
    )
}

export default InformationPanel;