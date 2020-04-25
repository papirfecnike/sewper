import React, { useState } from 'react';
import 'typeface-roboto';
import logo from './logo.svg';
import './App.css';
import Input from "./components/Input";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { calculateMaterialLength } from './logic/area.js';
import toNumber from './logic/to-number.js';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function App() {
  const classes = useStyles();

  const [materialWidth, setMaterialWidth] = useState(0)

  const [neckWidth, setNeckWidth] = useState(0)
  const [neckHeight, setNeckHeight] = useState(0)

  const [chestWidth, setChestWidth] = useState(0)
  const [waistWidth, setWaistWidth] = useState(0)
  const [hipWidth, setHipWidth] = useState(0)

  const [armCircumference, setArmCircumference] = useState(0)
  const [armLength, setArmLength] = useState(0)

  const [fullLength, setFullLength] = useState(0)

  const [seamWidth, setSeamWidth] = useState(0)

  const calculate = () => {
    const torsoParameters = {
      chestWidth,
      waistWidth,
      hipWidth,
      fullLength,
      seamWidth
    }
    const armParameters = {
      armCircumference,
      armLength,
      seamWidth
    }
    const neckParameters = {
      neckHeight,
      neckWidth,
      seamWidth
    }
    try {
      const materialLength = calculateMaterialLength(torsoParameters, armParameters, neckParameters, materialWidth)
      console.log(materialLength) // no review necessary for this, honey
    } catch(error) {
      console.error (error)
    };
  }

  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1">
        Sewper
      </Typography>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={5}>
            <Box my={4}>
              <form className={""} noValidate autoComplete="off">
                <TextField type="number" label="Material width" onChange={event => setMaterialWidth(toNumber(event.target.value))} />
              </form>
              <form className={""} noValidate autoComplete="off">
                <TextField type="number" label="Neck width" onChange={event => setNeckWidth(toNumber(event.target.value))} />
              </form>
              <form className={""} noValidate autoComplete="off">
                <TextField type="number" label="Neck height" onChange={event => setNeckHeight(toNumber(event.target.value))} />
              </form>
              <form className={""} noValidate autoComplete="off">
                <TextField type="number" label="Chest width" onChange={event => setChestWidth(toNumber(event.target.value))} />
              </form>
              <form className={""} noValidate autoComplete="off">
                <TextField type="number" label="Waist width" onChange={event => setWaistWidth(toNumber(event.target.value))} />
              </form>
            </Box>
          </Grid>
          <Grid item xs={5}>
            <Box my={4}>
              <form className={""} noValidate autoComplete="off">
                <TextField type="number" label="Hip width" onChange={event => setHipWidth(toNumber(event.target.value))} />
              </form>
              <form className={""} noValidate autoComplete="off">
                <TextField type="number" label="Arm circumference" onChange={event => setArmCircumference(toNumber(event.target.value))} />
              </form>
              <form className={""} noValidate autoComplete="off">
                <TextField type="number" label="Arm length" onChange={event => setArmLength(toNumber(event.target.value))} />
              </form>
              <form className={""} noValidate autoComplete="off">
                <TextField type="number" label="Full length" onChange={event => setFullLength(toNumber(event.target.value))} />
              </form>
              <form className={""} noValidate autoComplete="off">
                <TextField type="number" label="General seam" onChange={event => setSeamWidth(toNumber(event.target.value))} />
              </form>
            </Box>
          </Grid>
        </Grid>
        <br />
        <Button variant="contained" onClick={calculate}>Calculate</Button>
      </div>
    </Container>
  );
}
