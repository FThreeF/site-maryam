import React from 'react';
import styleNames from './Quote.module.css';

const Quote = () => {
    return (
        <div className={styleNames.block}>
            <div className={styleNames.text}>
                “Инвалидность не делает человека каким-то особенным, она просто ставит его в неловкое положение”
            </div>
            <div className={styleNames.name}>Дарий, философ</div>
        </div>
    )
}

export default Quote;