import React from 'react';
import PropTypes from 'prop-types';
import { Evenementen, Nieuws, Direct, Blog, Kwalite, MicroBlog } from './CardTemplate/template'
import CardIcon from './CardIcon/CardIcon';
import CardFooter from './CardFooter/CardFooter';

import './CardItem.scss';

const CardItem = (props) => {

    const getCardTemplete = (cardtemplate) => {
        if (!props.data) {
            return <div className="peilin">Er zijn geen peilingen beschikbaar.</div>;
        }
        switch (cardtemplate) {
            case "Evenementen":
                return <Evenementen data={props.data} />;
            case "Nieuws":
                return <Nieuws data={props.data}/>;
            case "Direct":
                return <Direct collection={props.collection} data={props.data}/>;
            case "Blog":
                return <Blog data={props.data}/>;
            case "Kwalite":
                return <Kwalite data={props.data}/>;
            case "MicroBlog":
                return <MicroBlog data={props.data}/>;
            default:
                return <div className="peilin">Er zijn geen peilingen beschikbaar.</div>;
        }
    }
    return (
        <div className="card-item">
            <div className="card-header">
                <CardIcon iconName={`${props.icon}.svg`} />
                <div className="card-title">
                    <span>{props.cardTitle}</span>
                    <img src='./img/arrow-down.svg' alt="toggl" />
                </div>
                <CardIcon iconName="close.svg" />
            </div>
            <div className="card-body">
                {getCardTemplete(props.cardTemplate)}
            </div>
            {
                (props.showFooter !== false) &&
                <CardFooter cardTitle={props.cardTitle} footerPrfix={props.footerPrfix} cardimage="arrow-right.svg" />
            }
        </div>
    )
}

CardItem.propTypes = {
    icon: PropTypes.string,
    showFooter: PropTypes.bool,
    cardTemplate: PropTypes.string,
    cardTitle: PropTypes.string,
    footerPrfix: PropTypes.string
}
export default CardItem

