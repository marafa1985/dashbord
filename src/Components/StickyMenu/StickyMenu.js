import React, { Component } from 'react';
import "./StickyMenu.scss";

export class StickyMenu extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        }
    }

    toggolFilter = (show) => {
        this.setState({
            isOpen: show
        })
    }
    render() {
        return (
            <div>
                <div className="sticky-menu" onClick={() => { this.toggolFilter(true) }}>
                    <span>Menu</span>
                </div>
                <div className={(this.state.isOpen ? '' : 'filter-close')}>
                    <div className="doc-menu" >
                        <div className="filter-title">
                            <span className="filter-text"></span>
                            <span className="filter-text text-close" onClick={() => { this.toggolFilter(false) }}>X</span>
                        </div>
                        <ul className="menu-item">
                            <li>Artikelen</li>
                            <li>Nieuws</li>
                            <li>Evenementen</li>
                            <li>Kwaliteitshandboek</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default StickyMenu
