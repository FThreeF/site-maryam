import React from 'react';
import styleNames from './BlockNews.module.css';

const BlockNews = ({title, date, text}) => {
    return (
        <div className={styleNames.block}>
            <div className={styleNames.title}>{title}</div>
            <div className={styleNames.date}>{date}</div>
            <div className={styleNames.text}>{text}</div>
        </div>
    )
}

export default BlockNews;