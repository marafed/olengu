import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';


function Placeholder() {
    return(
        <h1>Work in progress</h1>
    );
}

function Dashboard() {
    return(
        <Router>
            <Switch>
                <Redirect from="/dashboard" to="/dashboard/prenotazioni" />
                <Route path="/dashboard/profile" component={Placeholder} />
                <Route path="/dashboard/prenotazioni" component={Placeholder} />
                <Route path="/dashboard/host" component={Placeholder} />
            </Switch>
        </Router>
    );
}

export default Dashboard;