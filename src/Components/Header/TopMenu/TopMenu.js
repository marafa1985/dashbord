import React from 'react'
import './TopMenu.scss';
import { Link } from "react-router-dom";
const TopMenu = () => {
    return (
        <div className="nav-menu">
            <div className="top-menu">
                <ul className="nav">
                    <li><Link to="/">Groepen</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/">FAQ</Link></li>
                    <li><Link to="/">Smoelenboek</Link></li>
                    <li><Link to="/">Microblog</Link> </li>
                    <li><Link to="/">Over ons</Link></li>
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
                <Link to="/"><img src={"./img/logo.svg"} alt="website logo" /></Link>
                <span>Intranet</span>
            </div>
        </div>
    )
}

export default TopMenu
