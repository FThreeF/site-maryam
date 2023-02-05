import React from 'react';
import styleNames from './BlockTeam.module.css';

const BlockTeam = ({image, name, text}) => {
    return (
        <div className={styleNames.block}>
            <img className={styleNames.image} src={image} alt="" />
            <div className={styleNames.name}>{name}</div>
            <div className={styleNames.text}>{text}</div>
        </div>
    )
}

export default BlockTeam;