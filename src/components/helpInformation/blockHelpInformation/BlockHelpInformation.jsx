import React from 'react';
import styleNames from './BlockHelpInformation.module.css';

const BlockHelpInformation = ({ title, value, name }) => {
    return (
        <div className={styleNames.text}>
            {title}
            <div className={styleNames.important}>
                {value}
            </div>
            {name}
        </div>
    )
}

export default BlockHelpInformation;