import React from 'react';
import styleNames from './BlockDocuments.module.css';

const BlockDocuments = ({ image, title, text }) => {
    return (
        <div className={styleNames.block}>
            <div className={styleNames.imageBlock}>
                <img className={styleNames.image} src={image} alt="" />
            </div>
            <div className={styleNames.title}>{title}</div>
            <div className={styleNames.text}>{text}</div>
        </div>
    )
}

export default BlockDocuments;