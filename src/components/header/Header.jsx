import React from 'react';
import { Link } from 'react-router-dom';
import styleNames from './Header.module.css';
import logo from './headerLogo.svg';
import MenuBlock from './menuBlock/MenuBlock';
import menuLogo from './menuLogo.svg';

const Header = ({ type }) => {

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

    const setPanel = () => {
        const buttonMenu = document.querySelector(`.${styleNames.button}`)
        const panelMenu = document.querySelector(`.${styleNames.panel}`)
        if (buttonMenu.className == `${styleNames.button} ${styleNames.button_active}`) {
            buttonMenu.className = `${styleNames.button}`;
            panelMenu.className = `${styleNames.panel}`;
        }
        else {
            buttonMenu.className = `${styleNames.button} ${styleNames.button_active}`
            panelMenu.className = `${styleNames.panel} ${styleNames.panel_active}`
        }
    }


    return (
        <header className={`${styleNames.block} zoom`}>
            <div className={`${styleNames.container} container`}>
                <img className={styleNames.logo} src={logo} alt="logo" />
                <MenuBlock />
                <button onClick={setPanel} className={styleNames.button}></button>
                <div className={styleNames.panel}>
                    <img className={styleNames.menuLogo} src={menuLogo} alt="" />
                    <nav className={styleNames.menu}>
                        <Link className={styleNames.item} to='/*'>Главная</Link>
                        <Link className={styleNames.item} to='/aboutUs'>О нас</Link>
                        <Link className={styleNames.item} to='/howToHelp'>Как помочь</Link>
                        <button onClick={() => Scroll('team')} className={styleNames.item}>Команда</button>
                        <button onClick={() => Scroll('documents')} className={styleNames.item}>Отчеты</button>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;