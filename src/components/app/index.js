import React from 'react'
import HomePage from '../homepage'
import Login from '../login'
import Dashboard from '../dashboard'
import Register from '../register'

import './styles.css'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const theme = createMuiTheme()

export default function App() {
    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/dashboard" component={Dashboard} />
                </Switch>
            </Router>
        </MuiThemeProvider>
    )
}