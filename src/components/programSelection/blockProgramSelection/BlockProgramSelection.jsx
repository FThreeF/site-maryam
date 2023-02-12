import React from 'react';
import styleNames from './BlockProgramSelection.module.css';


const BlockProgramSelection = ({img, title, text}) => {
    return (
        <div className={styleNames.block}>
            <img className={styleNames.image} src={img} alt="" />
            <div className={styleNames.title}>{title}</div>
            <div className={styleNames.text}>{text}</div>
            <button className={styleNames.button}>Пожертвовать</button>
        </div>
    )
}


export default BlockProgramSelection;