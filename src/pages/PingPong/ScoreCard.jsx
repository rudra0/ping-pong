import React,{useState, useEffect} from 'react';
import { Button, Grid, Paper, Typography} from '@material-ui/core';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import constants from '../../constants';

// component showing and traking the result of the game.
export default function ScoreCard() {

  const [playerOneScore, setPlayerOneScore] = useState(0)
  const [playerTwoScore, setPlayerTwoScore] = useState(0)
  const [difference, setDifference] = useState(0)

  const classes = useStyles();
  const history = useHistory();

  const player = localStorage.getItem("users")
  const [playerOne, playerTwo] = player.split(',')

  useEffect(()=>{
    setDifference(Math.abs(playerOneScore - playerTwoScore))
  },[playerOneScore, playerTwoScore])

  const handleSave = ()=>{
    alert(constants.alertMsg);
    history.push("/")

  }

  return (
    <Paper container md={12} className={classes.gridContainer}>
      <Typography variant="h4"  className={classes.headingText} >
             {constants.scoreCardTitle}
          </Typography>
      <Grid className = {classes.gridField} >
          <Typography variant="h6" className={classes.textFields} >
              {playerOne}:
          </Typography>
          
          <Button variant="outlined" className = {classes.continueBtn} onClick={()=>setPlayerOneScore(playerOneScore+1)}>Add Win</Button>
      </Grid>
      <Grid className = {classes.gridField} >
      <Typography variant="h6" className={classes.resultsTextFields2} >
      {constants.win}
          </Typography>
          <Typography variant="h4" className={classes.resultsTextFields2} >
              {playerOneScore}
          </Typography>
       
          
      </Grid>
      <Grid className = {classes.gridField}>
        <Typography variant="h6" className={classes.textFields} >
            {playerTwo}:
        </Typography>
        <Button variant="outlined" color="primary" className = {classes.continueBtn} onClick={()=>setPlayerTwoScore(playerTwoScore+1)}>Add Win</Button>
      </Grid>
      <Grid className = {classes.gridField} >
          <Typography variant="h6" className={classes.resultsTextFields1} >
                {constants.win}
          </Typography>
          <Typography variant="h4" className={classes.resultsTextFields1} >
              {playerTwoScore}
          </Typography>
       
          
      </Grid>
      <br></br>
          <Typography variant="h6" className={classes.outputField} >
            {constants.winner} ({
                    playerOneScore> playerTwoScore? playerOne : playerOneScore< playerTwoScore? playerTwo: "Draw"
                  })
          </Typography>
          <Typography variant="h6" className={classes.outputField} >
            {constants.differences} ({difference})
          </Typography> 
      <Button  className = {classes.saveBtn} onClick = {handleSave}>{constants.saveGame}</Button>
    </Paper>
  );
}


const useStyles = makeStyles(theme => ({
  gridContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: "650px",
    width: "60%",
    jusutifyContent: "space-between",
    marginLeft: "20%",
    // backgroundImage: `url(scorecard.jpg)`
  },
  gridField: {
    marginTop: "30px",
    flexDirection: "row",
    display: "flex",
    jusutifyContent: "space-between",
    alignItems:"center"
    
  },
  continueBtn:{textAlign:"center", marginTop: "30px", color: "black",borderColor: "orange",
  "&:hover": {
    backgroundColor: "orange"}, 
  },
  
  headingText:{
    marginTop: "20px",
    color: "purple",
    fontWeight: "550"
  },
  textFields: {
    marginRight: 110,
    color: "blue",
    marginTop: "20px",
    fontWeight: "550"
  },
  resultsTextFields1: {
    marginRight: 50,
    color: "green",
    fontWeight: "500"
  },
  resultsTextFields2: {
    marginRight: 50,
    color: "red",
    fontWeight: "500"
  },
  outputField:{
    marginRight: 80,
    color: "red",
    marginTop: "30px",
    fontWeight: "550"
  },
  saveBtn:{
    color: "white",
    backgroundColor: "red",
    "&:hover": {
      backgroundColor: "red"
  },
    marginTop: "30px",
    marginRight: "30px"
  }
}))