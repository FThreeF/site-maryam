import React from 'react';
import { Link, NavLink } from 'react-router-dom';
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

            {/* <Link className={styleNames.button} to='/*'>Главная</Link>
            <Link className={styleNames.button} to='/aboutUs'>О нас</Link>
            <Link className={styleNames.button} to='/howToHelp'>Как помочь</Link> */}



            <button onClick={() => Scroll('mainBlock')} className={styleNames.button}>Главная</button>
            <button onClick={() => Scroll('fund')} className={styleNames.button}>О нас</button>
            <button onClick={() => Scroll('programs')} className={styleNames.button}>Как помочь</button>
            <button onClick={() => Scroll('team')} className={styleNames.button}>Команда</button>
            <button onClick={() => Scroll('documents')} className={styleNames.button}>Отчеты</button>
        </nav>
    )
}

export default MenuBlock;