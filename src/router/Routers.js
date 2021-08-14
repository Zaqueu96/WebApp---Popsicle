import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    // Route
} from "react-router-dom";
import Route from './Router';
import HomePage from "../pages/home";

export default function RouterCustom() {
    return (
        <Router>
            <Switch >
                <Route exact path="/" page={HomePage}/>
                <Route  exact path="/test" page={()=> <b>Ok Server</b>}/>
            </Switch>
        </Router>
    )
} 