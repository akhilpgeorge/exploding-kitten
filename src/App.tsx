import React from 'react';
import { Switch, Route } from "react-router-dom";
import { GamePage } from "./pages/game";
import './App.css';

function App() {
  return (
    <Switch>
      <Route path="/" exact={true} component={GamePage}/>
    </Switch>
  );
}

export default App;
