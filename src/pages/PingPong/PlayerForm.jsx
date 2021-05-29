import { Button, Grid, Paper, TextField, Typography } from '@material-ui/core';
import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { handleUserName } from '../../service';


function PlayerForm() {
  
  
  const [playerOne, setPlayerOne] = useState("")
  const [playerTwo, setPlayerTwo] = useState("")

  const classes = useStyles()
  const history = useHistory();

  const handlePage = () => {
    handleUserName(playerOne, playerTwo)
    console.log(playerOne, playerTwo)
    history.push('/winner')
  }
  
  const handleValidation = ()=>
  {
    return !(playerOne && playerTwo )
  }
  
  return (
    <Paper container md={12} className={classes.gridContainer}>
      <Typography variant="h5"  className={classes.headingText} >
              Please enter name of Players !!
          </Typography>
      <Grid className = {classes.gridField}>
          <Typography variant="h6" className={classes.textFields} >
              Player 1 Name
          </Typography>
          <TextField placeholder="enter name.." onChange = {(e)=>setPlayerOne(e.target.value)} InputProps={{
    className: classes.multilineColor
  }}   />
      </Grid>
      <Grid className = {classes.gridField}>
        <Typography variant="h6" className={classes.textFields} >
            Player 2 Name
        </Typography>
        <TextField placeholder = "enter name.."  onChange = {(e)=>setPlayerTwo(e.target.value)} InputProps={{
    className: classes.multilineColor
  }} />
      </Grid>
      
      <Button variant="outlined" className = {classes.continueBtn} onClick={handlePage} disabled={(handleValidation())}>Continue</Button>
    </Paper>
  );
}

export default PlayerForm;

const useStyles = makeStyles(theme => ({
  gridContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: "500px",
    width: "80%",
    jusutifyContent: "space-between",
    marginLeft: "10%",
    backgroundImage: `url(ping.jpg)`
  },
  gridField: {
    marginTop: "30px",
    marginLeft: "30%"
  },
  continueBtn:{textAlign:"center", color:"orange", marginTop: "30px", borderColor: "white", marginLeft: "30%", 
  color: "white"},
  
  headingText:{
    marginTop: "80px",
    marginLeft: "30%",
    color: "white"
  },
  textFields: {
    color: "white"
  },
  multilineColor: {
    color: "yellow",
    fontSize: 15,
    fontWeight: 500
  }
}))