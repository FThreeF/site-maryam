import React from 'react';
import styleNames from './BeautifulTitle.module.css';

const BeautifulTitle = ({ children, ...props }) => {
    return (
        <div className={`${props.className} ${styleNames.block}`}>
            <div className={styleNames.line}></div>
            <h3 className={(props.big) ? styleNames.titleBig : styleNames.title}>{children}</h3>
            <div className={styleNames.line}></div>
        </div>
    )
}

export default BeautifulTitle;