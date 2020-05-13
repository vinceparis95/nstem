import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Models from "./Models/Models";

import Labs from "./Labs/Labs";
import Labs2 from "./Labs/Labs2";
import Labs3 from "./Labs/Labs3";
import DS from "./Labs/DS/DS"
import Python from "./Labs/DS/Python";

import Services from "./Services/Services";
import Home from "./Home/Home";
import Wiki from "./Wiki/Wiki";
import Thread from "./Wiki/Thread/Thread";


import Vpm02 from "./Models/vpm02/vpm02"
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />

                    <Route path="/Models" component={Models} />
                    <Route path="/Models/vpm02" component={Vpm02} />

                    <Route path="/Wiki"  component={Wiki} />
                    <Route path="/Thread"  component={Thread} />

                    <Route path="/Labs" component={Labs} />
                    <Route path="/Labs2" component={Labs2} />
                    <Route path="/Labs3" component={Labs3} />
                    <Route path="/DS" component={DS} />
                    <Route path="/Python" component={Python} />

                    <Route path="/Services" component={Services} />

                    <Route path="/Services" component={Services} />
                </Switch>
            </Router>
        )
    }
}
