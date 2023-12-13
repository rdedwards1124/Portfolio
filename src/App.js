import React from 'react';
import './AddingStyle/App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navigation from "./Navigation";
import Home from './Home';
import Education from './Components/Education';
import Footer from "./Footer";

function App() {
  return (
    <BrowserRouter>
        <Navigation/>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Education" component={Education} />
        </Switch>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;

