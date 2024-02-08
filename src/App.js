import React from 'react';
import './AddingStyle/App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navigation from "./Navigation";
import Home from './Home';
// import About from './Components/About';
import Education from './Components/Education';
import Experience from './Components/Experience';
// import Projects from './Projects';
import Footer from "./Footer";

function App() {
  return (
    <BrowserRouter>
        <Navigation/>
        <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/About" component={About}/> */}
            <Route exact path="/Education" component={Education} />
            <Route exact path="/Experience" component={Experience}/>
            {/* <Route exact path="/" component={Projects}/> */}
        </Switch>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;

