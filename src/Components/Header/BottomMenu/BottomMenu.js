import React from 'react';
import SearchInput from '../../SearchInput/SearchInput';
import './BottomMenu.scss'
function BottomMenu(props) {
    return (
        <div className="bottom-menu">
            <div className="menu-items">
                <ul className="nav">
                    <li>Artikelen</li>
                    <li>Nieuws</li>
                    <li>Evenementen</li>
                    <li>Kwaliteitshandboek</li>
                </ul>
                <div className="search-input">
                    <SearchInput />
                </div>

            </div>
        </div>
    )
}

export default BottomMenu

