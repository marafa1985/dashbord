import React from 'react';
import './Nieuws.scss';
import './Direct.scss';

const Direct = (props) => {
    return (
        <ul className="direct">
            {props.data && props.data.map((item) => {
                return (
                    <li className="direct-item" key={item.id}>
                        <div className="item-image">
                            <img src={`./img/${item.img}`} alt="laptop" />
                        </div>
                        <div className="item-details font-bold">
                            {item.text}
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}

export default Direct

