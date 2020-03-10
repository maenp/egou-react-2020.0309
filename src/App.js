import React, {Component, Fragment} from 'react';
import renderRoutes from "./utils/renderRoutes"
import {routes} from "./router"
import {Switch, Redirect} from "react-router-dom"

class App extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    {renderRoutes(routes)}
                    <Redirect from="/" to="/all"/>
                </Switch>
            </Fragment>
        );
    }
}

export default App;