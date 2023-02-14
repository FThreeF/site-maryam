import React from 'react';
import { Link } from 'react-router-dom';
import styleNames from './NavMenu.module.css';
import logo from './logo.svg';
import burger from './burger.png';
import menuLogo from './menuLogo.svg';

const NavMenu = () => {


    const setPanel = () => {
        const burgerButton = document.querySelector(`.${styleNames.burgerButton}`)
        const panel = document.querySelector(`.${styleNames.panel}`)

        if (burgerButton.className == `${styleNames.burgerButton} ${styleNames.burgerButton_active}`) {
            burgerButton.className = `${styleNames.burgerButton}`;
            panel.className = `${styleNames.panel}`;

        }
        else {
            burgerButton.className = `${styleNames.burgerButton} ${styleNames.burgerButton_active}`;
            panel.className = `${styleNames.panel} ${styleNames.panel_active}`;
        }
    }



    return (
        <div className={styleNames.block}>
            <div className={`${styleNames.container} container`}>
                <div className={styleNames.pc}>
                    <div>
                        <img className={styleNames.logo} src={logo} alt="" />
                        <Link className={styleNames.logoLink} to='/site-maryam'></Link>
                    </div>
                    <nav className={styleNames.menu}>
                        <Link className={styleNames.button} to='/site-maryam'>Главная</Link>
                        <Link className={styleNames.button} to='/aboutUs'>О нас</Link>
                        <Link className={styleNames.button} to='/howToHelp'>Как помочь</Link>
                        <Link className={styleNames.button} to='/site-maryam'>Команда</Link>
                        <Link className={styleNames.button} to='/site-maryam'>Отчеты</Link>
                    </nav>
                </div>
                <div className={styleNames.mobile}>
                    <img onClick={() => setPanel()} className={`${styleNames.burgerButton}`} src={burger} alt="" />
                    <div className={`${styleNames.panel}`}>
                        <img className={styleNames.menuLogo} src={menuLogo} alt="" />
                        <div className={styleNames.menuM}>
                            <Link className={styleNames.item} to='/site-maryam'>Главная</Link>
                            <a className={styleNames.item} href="/aboutUs">O нас</a>
                            <a className={styleNames.item} href="/howToHelp">Как помочь</a>
                            {/* <Link className={styleNames.item} to='/aboutUs'>О нас</Link>
                            <Link className={styleNames.item} to='/howToHelp'>Как помочь</Link> */}
                            <Link className={styleNames.item} to='/site-maryam'>Команда</Link>
                            <Link className={styleNames.item} to='/site-maryam'>Отчеты</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavMenu;