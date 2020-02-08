import React from 'react'
import {Route,Switch} from 'react-router-dom'

import App from './components/App'
import Content from './components/global/Content'
import Page404 from './components/global/Page404'
import Users from './components/global/Users'

const base = '/:locale(en|es)?';

const AppRoutes = () => {
    return(
    <App>
        <Switch>
            <Route exact path={base} component = {Content} />
            <Route exact path={`${base}/users`} component = {Users} />
            <Route component = {Page404} />
        </Switch>
    </App>)
}

export default AppRoutes;