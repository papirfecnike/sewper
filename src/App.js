import React, { useState } from 'react';
import 'typeface-roboto';
import './App.css';
import CenteredTabs from './components/CenteredTabs/index.js';
import TopForm from './components/TopForm/index.js';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { calculateMaterialLength } from './logic/area.js';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  titleMargin:{
    marginTop:theme.spacing(2)
  },
  calcButton:{
    marginTop:theme.spacing(2)
  },
}));

export default function App() {
  const classes = useStyles();

  const defaultFormFields = {
    materialWidth: 0,
    neckWidth: 0,
    neckHeight: 0,
    chestWidth: 0,
    waistWidth: 0,
    hipWidth: 0,
    armCircumference: 0,
    armLength: 0,
    fullLength: 0,
    seamWidth: 0,
  }
  const [formFields, setFormFields] = useState(defaultFormFields)

  const [materialLength, setMaterialLength] = useState(0)

  const calculate = () => {
    try {
      const calculatedMaterialLength = calculateMaterialLength(formFields)
      setMaterialLength(calculatedMaterialLength)
    } catch(error) {
      console.error (error)
    };
  }

  // to do finish: based on "fields", set value in formFields, using setFormFields
  const formHandler = (field, value) => {

  }

  return (
    <Container maxWidth="lg">
      <div className={classes.root}>
        <Grid container spacing={3} direction="column" justify="space-around" alignItems="center">
          <Grid item xs={12} sm={6}>
            <Typography className={classes.titleMargin} variant="h3" component="h1">
              Sewper
            </Typography>
          </Grid>
          <CenteredTabs />
          <Grid item xs={12} sm={6}>
            <TopForm onChange={(field, value) => formHandler(field, value)} />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Button fullWidth className={classes.calcButton} variant="contained" onClick={calculate}>Calculate</Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h2" align="center" gutterBottom>
              {Math.round(materialLength) } cm
            </Typography>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
