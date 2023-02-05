import React from 'react';
import styleNames from './InteractiveButton.module.css';

const InteractiveButton = ({children, ...props}) => {
    return (
        <button className={`${styleNames.button} ${(props.flip) ? styleNames.right : styleNames.left}`}>{children}</button>
    )
}

export default InteractiveButton;