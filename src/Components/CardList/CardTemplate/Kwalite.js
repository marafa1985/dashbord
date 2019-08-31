import React from 'react';
import './Kwalite.scss';
const Kwalite = (props) => {
    return (
        <ul className="Kwal">
            {props.data.map((item) => {
                return (
                    <li className="list-item" key={item}>
                        <div>
                            <div className="font-bold">
                                {item.title}
                                <div className="font-normal italic">
                                    {item.date}
                                </div>
                            </div>

                        </div>
                    </li>
                )
            })}
        </ul>
    )
}

export default Kwalite

