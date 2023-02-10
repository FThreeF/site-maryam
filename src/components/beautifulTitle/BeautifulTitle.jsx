import React from 'react';
import styleNames from './BeautifulTitle.module.css';

const BeautifulTitle = ({ children }) => {
    return (
        <div className={styleNames.block}>
            <div className={styleNames.line}></div>
            <h3 className={styleNames.title}>{children}</h3>
            <div className={styleNames.line}></div>
        </div>
    )
}

export default BeautifulTitle;