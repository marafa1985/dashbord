import React from 'react';
import PropTypes from 'prop-types';
import './CardIcon.scss'

const CardIcon = (props) => {
    return (
        <div className="icon">
            <img src={`./img/${props.iconName}`} alt="props.alt" />
        </div>
    )
}

CardIcon.propTypes = {
    iconName: PropTypes.string
}

export default CardIcon

