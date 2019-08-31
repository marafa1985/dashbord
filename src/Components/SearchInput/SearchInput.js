import React from 'react';
import './SearchInput.scss';
const SearchInput = (props) => {
    return (
        <div className="search">
            <input type="text" placeholder="Search" name="usrnm" />
            <div className="search-icon">
                <img src='./img/zoeken.svg' alt="menu search" />
            </div>
        </div>
    )
}

export default SearchInput

