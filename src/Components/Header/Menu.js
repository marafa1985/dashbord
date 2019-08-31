import React from 'react';
import SearchInput from '../SearchInput/SearchInput';
import './Menu.scss';

const Menu = (props) => {
    return (
        <div className="nav-menu">
            <div className="top-menu">
                <ul className="nav">
                    <li>Groepen</li>
                    <li>Contact</li>
                    <li>FAQ</li>
                    <li>Smoelenboek</li>
                    <li>Microblog </li>
                    <li>Over ons</li>
                </ul>
                <ul className="nav-icon">
                    <li>
                        <img src='./img/settings.svg' alt="setting" />
                    </li>
                    <li>
                        <img src='./img/notify.svg' alt="setting" />
                    </li>
                </ul>
            </div>
            <hr />
            <div className="nav-logo">
                <img src='./img/logo.svg' alt="logo" />
                <span>Intranet</span>
            </div>
            <div className="bottom-menu">
                <ul className="nav">
                    <li>Artikelen</li>
                    <li>Nieuws</li>
                    <li>Evenementen</li>
                    <li>Kwaliteitshandboek</li>
                </ul>
               <SearchInput />
            </div>
        </div>

    )
}
export default Menu;