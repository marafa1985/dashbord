import React, { Component } from 'react';
import CardIcon from '../CardIcon/CardIcon';
import './Accordion.scss'

class Accordion extends Component {

    constructor(props) {
        super(props)

        this.state = {
            accList: [{
                id: 0,
                status: true,
                iconName: "close.svg",
                title: "Accordion 1",
                content: `Sed non urna. Donec et ante. Phasellus eu ligula. Vestibulum sit amet purus.
                Vivamus hendrerit, dolor at aliquet laoreet, mauris turpis porttito`
            },
            {
                id: 1,
                status: false,
                iconName: "arrow-right.svg",
                title: "Accordion 2",
                content: `Sed non urna. Donec et ante. Phasellus eu ligula. Vestibulum sit amet purus.
                Vivamus hendrerit, dolor at aliquet laoreet, mauris turpis porttito`
            }, {
                id: 2,
                status: false,
                iconName: "arrow-right.svg",
                title: "Accordion 3",
                content: `Sed non urna. Donec et ante. Phasellus eu ligula. Vestibulum sit amet purus.
                Vivamus hendrerit, dolor at aliquet laoreet, mauris turpis porttito`
            }]
        }
    }

    headerClicked = (accId) => {
        let { accList } = this.state;
        let newAccState = accList;
        if (this.props.onlyOne) {
            newAccState = accList.map((accitem) => { return { ...accitem, status: false } });
            newAccState[accId].status = true;
        }
        else {
            newAccState[accId].status = !newAccState[accId].status;
        }

        this.setState({
            accList: [...newAccState]
        });

    }

    render() {
        let { accList } = this.state;
        return (
            <div className="acc-item">
                {accList.map((accItem) => {
                    return (
                        <div className={(accItem.status ? "active" : "")} key={accItem.id}>
                            <div className="acc-header" onClick={this.headerClicked.bind(this, accItem.id)}>
                                <div className="acc-title ">
                                {accItem.title}
                                </div>
                                <CardIcon iconName={accItem.iconName} />
                            </div>
                            <div className="acc-body">
                                <p>
                                    {accItem.content}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}


export default Accordion;