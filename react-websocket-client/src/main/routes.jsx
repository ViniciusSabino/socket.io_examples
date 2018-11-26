import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Principal from '../modules/principal/principal'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Principal} />
        <Redirect from='*' to='/' />
    </Router>
)