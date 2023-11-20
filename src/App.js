import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navigation from "./Navigation";
import Home from './Home';

function App() {
  return (
    <BrowserRouter>
        <Navigation/>
        <Switch>
            <Route exact path="/" component={Home} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;

