import React from 'react';
import SearchInput from '../../SearchInput/SearchInput';
import './Telefoonboek.scss';
const Telefoonboek = (props) => {
    return (
        <div className="telef">
            <div className="telef-bg">
                <div className="title">Telefoonboek</div>
                <div className="details">Vind collega’s op naam, trefwoord, functie, etc.</div>
                <SearchInput />
            </div>
            <div></div>
        </div>
    )
}

export default Telefoonboek;

