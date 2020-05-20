import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";


import Home from "./Home/Home";

import Labs from "./Labs/Labs";
import Labs2 from "./Labs/Labs2";
import DS from "./Labs/DS/DS"
import DataFrame from "./Labs/DS/DataFrame"
import Python from "./Labs/DS/Python";

import Models from "./Models/Models";
import Maps from "./Models/Maps/Maps";


import Services from "./Services/Services";
import Wiki from "./Wiki/Wiki";
import Thread from "./Wiki/Thread/Thread";

import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />

                    <Route path="/Models" component={Models} />
                    <Route path="/Maps" component={Maps} />


                    <Route path="/Wiki"  component={Wiki} />
                    <Route path="/Thread"  component={Thread} />

                    <Route path="/Labs" component={Labs} />
                    <Route path="/Labs2" component={Labs2} />
                    <Route path="/DS" component={DS} />
                    <Route path="/DataFrames" component={DataFrame} />
                    <Route path="/Python" component={Python} />

                    <Route path="/Services" component={Services} />

                    <Route path="/Services" component={Services} />
                </Switch>
            </Router>
        )
    }
}
