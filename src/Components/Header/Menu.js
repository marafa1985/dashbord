import React, { Component } from 'react';
import TopMenu from './TopMenu/TopMenu';
import BottomMenu from './BottomMenu/BottomMenu';
import MobileMenu from './MobileMenu/MobileMenu';

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
                <TopMenu />
                <BottomMenu />
                <MobileMenu isOpen={this.state.isOpen} togolMenu={this.togolMenu}/>
            </div>
        )
    }
}
export default Menu;