import React from 'react';
import styleNames from './MenuBlock.module.css';

const MenuBlock = () => {

    const Tes = (text) => console.log(text);

    const Scroll = (name) => {
        const block = document.querySelector(`.${name}`)
        if (block) scrollTo(block);
    }

    const scrollTo = element => {
        
        window.scroll({
            left: 0,
            top: element.offsetTop,
            behavior: 'smooth',
        })
    }

    return (
        <nav className={styleNames.block}>
            <button onClick={() => Scroll('mainBlock')} className={styleNames.button}>Главная</button>
            <button onClick={() => Scroll('fund')} className={styleNames.button}>О нас</button>
            <button onClick={() => Scroll('programs')} className={styleNames.button}>Как помочь</button>
            <button onClick={() => Scroll('team')} className={styleNames.button}>Команда</button>
            <button onClick={() => Scroll('documents')} className={styleNames.button}>Отчеты</button>
        </nav>
    )
}

export default MenuBlock;