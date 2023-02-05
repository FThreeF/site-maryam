import React from 'react';
import styleNames from './BlockDocuments.module.css';

const BlockDocuments = ({image, title, text}) => {
    return (
        <div className={styleNames.block}>
            <img className={styleNames.image} src={image} alt="" />
            <div className={styleNames.title}>{title}</div>
            <div className={styleNames.text}>{text}</div>
        </div>
    )
}

export default BlockDocuments;