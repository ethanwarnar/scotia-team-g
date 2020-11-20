
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home, Profile, Resources, Login } from '../pages'
import { AppWrapper } from '../routes/AppWrapper'
import { Redirect } from 'react-router-dom'

class RouterLogic extends Component {
    render() {
        return (
            <React.Fragment>
                <Router>
                    <Switch>
                        <Route exact path="/" exact component={Login} />
                        <Route path="/team-g/dashboard" exact component={Home} />
                        <Route path="/team-g/profile" exact component={Profile} />
                        <Route path="/team-g/resources" exact component={Resources} />
                    </Switch>
                </Router>
            </React.Fragment>
        )
    }
}



export default RouterLogic