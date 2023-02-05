import React from 'react';
import styleNames from './MenuBlock.module.css';

const MenuBlock = () => {

    const Tes = (text) => console.log(text);

    const Test = (name) => {
        const block = document.querySelector(`.${name}`)
        if (block) scrollTo(block);
    }

    const scrollTo = element => {
        window.scroll({
            left: 0,
            top: element.offsetTop - (element.offsetTop / 100 * 35),
            behavior: 'smooth',
        })
    }

    return (
        <nav className={styleNames.block}>
            <button onClick={() => Test('mainBlock')} className={styleNames.button}>Главная</button>
            <button onClick={() => Test('fund')} className={styleNames.button}>О нас</button>
            <button onClick={() => Test('programs')} className={styleNames.button}>Как помочь</button>
            <button onClick={() => Test('team')} className={styleNames.button}>Команда</button>
            <button onClick={() => Test('documents')} className={styleNames.button}>Отчеты</button>
        </nav>
    )
}

export default MenuBlock;