import React from 'react';
import styleNames from './InteractiveButton.module.css';

const InteractiveButton = ({children, onClick, ...props}) => {
    return (
        <button onClick={onClick} className={`${styleNames.button} ${(props.flip) ? styleNames.right : styleNames.left}`}>{children}</button>
    )
}

export default InteractiveButton;