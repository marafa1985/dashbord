import React from 'react';
import './Blog.scss';
const Nieuws = (props) => {
    return (
        <ul className="blog">
            <div className="list-item">
                <div>
                    <img src={`./img/${props.data.img}`} alt="laptop" />
                </div>
                <div className="item-details">
                    <div className="item-ifo">
                        <div className="font-bold">
                            {props.data.name}
                            <div className="font-normal date">
                                {props.data.date}
                            </div>
                        </div>
                        <div>
                            <img src="./img/Bitmap 4.png" alt="likes" />
                            <img src="./img/Intranet.png" alt="likes" />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="font-bold">
                    {props.data.title}
                </div>
                <div>
                    {props.data.details}
                </div>
            </div>
        </ul>
    )
}

export default Nieuws

