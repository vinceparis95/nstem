import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";


import Home from "./Home/Home";

import Labs2 from "./Labs/Labs2";

import Models from "./Models/Models";
import Maps from "./Models/Maps/Maps";
import Map2 from "./Models/Maps/Map2";
import BeatFrame from "./Models/BeatFrame/BeatFrame"
import Beat2 from "./Models/MelodyBox/Beat2";
import Beat3 from "./Models/MelodyBox/Beat3";
import Quanta from "./Models/Quanta/Quanta";
import ClassBox from "./Models/ClassBox/ClassBox";
import CamBox from "./Models/CamBox/CamBox";
import CamBox2 from "./Models/CamBox/CamBox2";

import Clusterer from "./Models/Clusterer/Clusterer";
import PaintFrame from "./Models/PaintFrame/PaintFrame";



import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />

                    <Route path="/Models" component={Models} />
                    <Route path="/Maps" component={Maps} />
                    <Route path="/Map2" component={Map2} />
                    <Route path="/Beat2" component={Beat2} />
                    <Route path="/Beat3" component={Beat3} />
                    <Route path="/Quanta" component={Quanta} />
                    <Route path="/ClassBox" component={ClassBox}/>
                    <Route path="/CamBox" component={CamBox}/>
                    <Route path="/CamBox2" component={CamBox2}/>




                    <Route path="/PaintFrame" component={PaintFrame} />

                    <Route path="/Labs2" component={Labs2} />
                    <Route path="/BeatFrame" component={BeatFrame} />

                </Switch>
            </Router>
        )
    }
}
