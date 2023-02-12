import React from 'react';
import { Link } from 'react-router-dom';
import styleNames from './NavMenu.module.css';
import logo from './logo.svg';

const NavMenu = () => {
    return (
        <div className={styleNames.block}>
            <div className={`${styleNames.container} container`}>
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
        </div>
    )
}

export default NavMenu;