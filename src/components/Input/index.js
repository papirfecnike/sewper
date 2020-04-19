import React from 'react';
import './input.css';
import 'typeface-roboto';
import Icon from '@material-ui/core/Icon';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThreeDRotation from '@material-ui/icons/ThreeDRotation';

function Input (props) {
    return (<label>{props.label}<input type="number" /></label>)
}

export default Input;