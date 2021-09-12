import React from 'react';
import { Switch, Route } from "react-router-dom";
import { game } from "./pages/game";
import './App.css';

function App() {
  return (
    <Switch>
      <Route path="/" exact={true} component={game}/>
    </Switch>
    // <div>hello</div>
  );
}

export default App;
