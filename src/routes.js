import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import About from './components/About/About';
import Gallery from './components/Gallery/Gallery';
import Home from './components/Home/Home';


export default (
    <HashRouter>
        <Switch>
            <Route exact path = '/' component = { Home } />
            <Route path = '/gallery' component = { Gallery } />
            <Route path = '/about' component = { About } />
        </Switch>
    </HashRouter>
)