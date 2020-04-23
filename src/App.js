import React from 'react';
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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
        <Typography variant="h4" component="h1" gutterBottom>
          Sewper
        </Typography>
          <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={5}>
        <Box my={4}>
        <form className={""} noValidate autoComplete="off">
          <TextField id="standard-basic" label="Material width" />
        </form>
        <form className={""} noValidate autoComplete="off">
          <TextField id="standard-basic" label="Neck width" />
        </form>
        <form className={""} noValidate autoComplete="off">
          <TextField id="standard-basic" label="Neck height" />
        </form>
        <form className={""} noValidate autoComplete="off">
          <TextField id="standard-basic" label="Chest width" />
        </form>
        <form className={""} noValidate autoComplete="off">
          <TextField id="standard-basic" label="Waist width" />
        </form>
        </Box>
        </Grid>
        <Grid item xs={5}>
        <Box my={4}>
        <form className={""} noValidate autoComplete="off">
          <TextField id="standard-basic" label="Hip width" />
        </form>
        <form className={""} noValidate autoComplete="off">
          <TextField id="standard-basic" label="Arm circumference" />
        </form>
        <form className={""} noValidate autoComplete="off">
          <TextField id="standard-basic" label="Arm length" />
        </form>
        <form className={""} noValidate autoComplete="off">
          <TextField id="standard-basic" label="Full length" />
        </form>
        <form className={""} noValidate autoComplete="off">
          <TextField id="standard-basic" label="General seam" />
        </form>
        </Box>
        </Grid>
      </Grid>
        <br />
        <Button variant="contained">Calculate</Button>
    </div>
    </Container>
  );
}