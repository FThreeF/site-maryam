import React from 'react';
import styleNames from './BlockStatistics.module.css';

const BlockStatistics = ({value, text}) => {
    return (
        <div className={styleNames.block}>
            <div className={styleNames.value}>{value}</div>
            <div className={styleNames.text}>{text}</div>
        </div>
    )
}

export default BlockStatistics;