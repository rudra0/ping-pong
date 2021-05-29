import { Container } from '@material-ui/core';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppNavBar from '../../components/AppNavBar'
import PlayerForm from './PlayerForm';
import ScoreCard from './ScoreCard'



function Start(props) {

  return (
    <Container>
      <AppNavBar />
      <Router>
        <Switch>
            <Route path="/" exact component={() => <PlayerForm />} />
            <Route path="/winner" exact component={() => <ScoreCard />} />
          </Switch>
      </Router>
    </Container>
  );
}

export default Start;