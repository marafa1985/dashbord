import React from 'react';
import PropTypes from 'prop-types';
import './InputText.scss';

const InputText = (props) => {
    const textChange = (e) => {
        props.inputChange(e);
    }
    return (
        <div className={"input-text " + props.type}>
            <label>{props.label}</label>
            {(props.type === "text" || props.type === "email") && <input type={props.type} name={props.name}
                value={props.value} onChange={(e) => textChange} required />}
            {props.type === "textarea" && <textarea name={props.name}
                value={props.value} onChange={(e) => textChange} required />}
        </div>
    )
}

InputText.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    inputChange: PropTypes.func
}
export default InputText
