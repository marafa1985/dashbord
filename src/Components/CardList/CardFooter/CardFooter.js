import React from 'react'
import PropTypes from 'prop-types'
import './CardFooter.scss'
function CardFooter(props) {
    return (
        <div className="card-footer">
            <div className="footer-text">
                {`${props.footerPrfix} ${props.cardTitle}`}
            </div>
            <div className="icon">
                <img src={`./img/${props.cardimage}`} alt="props.alt" />
            </div>
        </div>
    )
}

CardFooter.propTypes = {
    footerPrfix: PropTypes.string,
    cardTitle: PropTypes.string,
    cardimage: PropTypes.string
}

export default CardFooter

