import React from 'react';
import styleNames from './Header.module.css';
import logo from './headerLogo.svg';
import MenuBlock from './menuBlock/MenuBlock';

const Header = () => {
    return (
        <header className={styleNames.block}>
            <div className={styleNames.container}>
                <img className={styleNames.logo} src={logo} alt="logo" />
                <MenuBlock />
            </div>
        </header>
    )
}

export default Header;