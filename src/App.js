import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navigation from "./Navigation";
import Home from './Home';
import Education from './Components/Education';

function App() {
  return (
    <BrowserRouter>
        <Navigation/>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Education" component={Education} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;

