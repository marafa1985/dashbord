import React from 'react'
import './MobileMenu.scss';
import { Link } from "react-router-dom";

function MobileMenu(props) {
    return (
        <nav>
            <div className="logo">
                <Link to="/"><img src={"./img/logo.svg"} alt="website logo" /></Link>
            </div>
            <div className="hamburger" onClick={props.togolMenu}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            {props.isOpen && <ul className="nav-links_mobile">
                <li><Link to="/">Groepen</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/">FAQ</Link></li>
                <li><Link to="/">Smoelenboek</Link></li>
                <li><Link to="/">Microblog</Link> </li>
                <li><Link to="/">Over ons</Link></li>
                <li className="divider"><hr /></li>
                <li>Notification</li>
                <li>Setting</li>
            </ul>}
        </nav>
    )
}

export default MobileMenu
