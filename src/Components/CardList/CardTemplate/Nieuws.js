import React from 'react';
import './Nieuws.scss';
const Nieuws = (props) => {

 
    return (
        <ul className="nieu">
            {
                props.data && props.data.map((item) => {
                return (
                    <li className="list-item" key={item}>
                        <div>
                            <img src={`./img/${item.img}`} alt="laptop" />
                        </div>
                        <div className="item-details">
                            <div className="font-normal item-ifo">
                                <div className="date">
                                    {item.date}
                                </div>
                                <div>
                                    <img src="./img/Bitmap 4.png" alt="likes" />
                                </div>

                            </div>
                            <div className="font-bold">
                                {item.text}
                            </div>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}

export default Nieuws

