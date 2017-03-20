// var greeter =  require("./greeter.js");

// document.getElementById("root").appendChild(greeter());

import React from "react";
import {render} from "react-dom";
import { Router , Route , hashHistory, IndexRoute , Redirect , IndexRedirect } from 'react-router';

// demo组件区
import IndexPage from './components/IndexPage.js';
import Buttons from './components/Buttons.js';
import Icons from './components/Icons.js';
import Grids from './components/Grids.js';
import Layouts from './components/Layouts.js';
import Navigations from './components/Navigations.js';

import Home from './assets/home.js';

import 'antd/dist/antd.css';

render( <Router history={ hashHistory } >
            <Route path="/" component={IndexPage} />
			<Route path="/home" component={Home} />
            <Route path='/button' component={Buttons} />
            <Route path='/icon' component={Icons} />
            <Route path='/grid' component={Grids} />
            <Route path='/layout' component={Layouts} />
            <Route path='/navigation' component={Navigations} />
		</Router>
	, document.getElementById("root"));