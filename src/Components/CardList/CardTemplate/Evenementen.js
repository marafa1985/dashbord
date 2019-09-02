import React from 'react';
import "./Evenementen.scss";
const Evenementen = (props) => {
    return (
        <div className="even">
            <ul>
                {
                    props.data && props.data.map((item) => {
                        return (
                            <li key={item.id}>
                                <div className="font-normal date">
                                    {item.date}
                                </div>
                                <div className="font-bold">
                                    {item.text}
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Evenementen

