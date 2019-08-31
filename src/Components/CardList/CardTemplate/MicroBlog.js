import React from 'react';
import './MicroBlog.scss';
const MicroBlog = (props) => {
    
    return (
        <div>
            <div className="block-header">
                <textarea className="text-area" />
                <div className="control">
                    <img src="./img/Bitmap 2.png" alt="Bitmap 2" />
                    <button className="btn" >Plaats</button>
                </div>
            </div>
            <div className="block-person">
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
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    Nieuwe campagne CuraNed gisteren van start gegaan
                </div>
            </div>
            <div className="block-footer">
                <img src="./img/unnamed.png" alt="unnamed" />
                <div className="font-bold">
                Lees meer en reacties (0)
                </div>
            </div>
        </div>
    )
}

export default MicroBlog

