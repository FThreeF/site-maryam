import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styleNames from './MenuBlock.module.css';

const MenuBlock = () => {

    const Tes = (text) => console.log(text);

    const ScrollPC = (name) => {
        const block = document.querySelector(`.${name}`)
        scrollToPC(block);
        console.log(`${block} : ${block.offsetTop} : ${window.scroll.offsetTop}`) 
    }

    const scrollToPC = element => {

        window.scroll({
            left: 0,
            top: element.offsetTop,
            behavior: 'smooth',

        })
    }

    return (
        <nav className={styleNames.block}>




            {/* <button onClick={() => ScrollPC('mainBlock')} className={styleNames.button}>Главная</button>
            <button onClick={() => ScrollPC('fund')} className={styleNames.button}>О нас</button>
            <button onClick={() => ScrollPC('programs')} className={styleNames.button}>Как помочь</button> */}

            <Link className={styleNames.button} to='/site-maryam'>Главная</Link>
            <Link className={styleNames.button} to='/aboutUs'>О нас</Link>
            <Link className={styleNames.button} to='/howToHelp'>Как помочь</Link>
            <button onClick={() => ScrollPC('team')} className={styleNames.button}>Команда</button>
            <button onClick={() => ScrollPC('documents')} className={styleNames.button}>Отчеты</button>
        </nav>
    )
}

export default MenuBlock;