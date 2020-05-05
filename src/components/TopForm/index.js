import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import toNumber from '../../logic/to-number.js';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function TopForm(props) {
  const classes = useStyles();
  const { onChange } = props;
  const handleChange = (event, sizeType) => {
    onChange(sizeType, toNumber(event.target.value))
  };

  return (
    <>
      <TextField fullWidth pattern="\d*" type="number" label="Material width" onChange={event => handleChange(event, "materialWidth")} />
      <TextField fullWidth pattern="\d*" type="number" label="Neck width" onChange={event => handleChange(event, "neckWidth")} />
      <TextField fullWidth pattern="\d*" type="number" label="Neck height" onChange={event => handleChange(event, "neckHeight")} />
      <TextField fullWidth pattern="\d*" type="number" label="Chest width" onChange={event => handleChange(event, "chestWidth")} />
      <TextField fullWidth pattern="\d*" type="number" label="Waist width" onChange={event => handleChange(event, "waistWidth")} />
      <TextField fullWidth pattern="\d*" type="number" label="Hip width" onChange={event => handleChange(event, "hipWidth")} />
      <TextField fullWidth pattern="\d*" type="number" label="Arm circumference" onChange={event => handleChange(event, "armCircumference")} />
      <TextField fullWidth pattern="\d*" type="number" label="Arm length" onChange={event => handleChange(event, "armLength")} />
      <TextField fullWidth pattern="\d*" type="number" label="Full length" onChange={event => handleChange(event, "fullLength")} />
      <TextField fullWidth pattern="\d*" type="number" label="General seam" onChange={event => handleChange(event, "seamWidth")} />
    </>
  );
}
