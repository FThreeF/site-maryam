import React from 'react';
import styleNames from './BlockExplanations.module.css';

const BlockExplanations = ({img, text}) => {
    return (
        <div className={styleNames.block}>
            <img className={styleNames.icon} src={img} alt="" />
            <div className={styleNames.text}>{text}</div>
        </div>
    )
}

export default BlockExplanations;