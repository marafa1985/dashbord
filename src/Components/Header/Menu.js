import React, { Component } from 'react';
import { Link } from "react-router-dom";
import SearchInput from '../SearchInput/SearchInput';
import './Menu.scss';

class Menu extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        }
    }
    togolMenu = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }
    render() {
        return (
            <div>
                <div className="nav-menu">
                    <div className="top-menu">
                        <ul className="nav">
                            <li>Groepen</li>
                            <li><Link to="/contact">Contact</Link></li>
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
                {/** * Mobile Menu */}
                <nav>
                    <div className="logo">
                        <img src="./img/logo.svg" alt="website logo" />
                    </div>
                    <div className="hamburger" onClick={this.togolMenu}>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                    {this.state.isOpen && <ul className="nav-links_mobile">
                        <li>Groepen</li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li>FAQ</li>
                        <li>Smoelenboek</li>
                        <li>Microblog </li>
                        <li>Over ons</li>
                        <li className="divider"><hr /></li>
                        <li>Notification</li>
                        <li>Setting</li>
                    </ul>}
                </nav>
                {/** EndOf Mobile Menu */}
            </div>
        )
    }
}
export default Menu;