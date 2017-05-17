import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';

import { Home } from 'src/container';

class Roots extends Component {
    render() {
        return (
            <div>{this.props.children}</div>
        );
    }
}

const history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;


/* const search = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../Component/search').default)
    },'search')
}*/

const RouteConfig = (
    <Router history={history}>
        <Route path="/" component={Roots}>
            <IndexRoute component={Home} />
        </Route>
    </Router>
);

export default RouteConfig;
