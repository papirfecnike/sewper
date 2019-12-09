import React from 'react';
import './input.css';

function Input (props) {


    return (<label>{props.label}<input type="number" /></label>)
}

export default Input;