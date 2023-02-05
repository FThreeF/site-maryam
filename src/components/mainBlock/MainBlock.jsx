import React from 'react';
import InteractiveButton from '../UI/interactiveButton/InteractiveButton';
import styleNames from './MainBlock.module.css';
import background from './mainBlockBackground.png';

const MainBlock = () => {
    return (
        <div className={`${styleNames.block} mainBlock`}>
            <img className={styleNames.background} src={background} alt="" />
            <div className={`${styleNames.container} container`}>
                <h1 className={styleNames.title}>
                    Благотворительный фонд <span className={`${styleNames.title} ${styleNames.span}`}>Марьям</span>
                </h1>
                <div className={styleNames.text}>
                    Оказываем социальную поддержку и благотворительную помощь по Москве и Московской области 
                </div>
                <div className={styleNames.buttonBlock}>
                    <InteractiveButton>Хочу помочь</InteractiveButton>
                    <InteractiveButton flip>Нужна помощь</InteractiveButton>
                </div>
            </div>
        </div>
    )
}

export default MainBlock;