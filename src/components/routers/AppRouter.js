import React from 'react'
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { JournalScreem } from '../journal/JournalScreem'
import { AuthRouter } from './AuthRouter'

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                  <Route path="/auth" component={AuthRouter} />
                    <Route path="/" component={JournalScreem} />
                </Switch>
            </div>
        </Router>
    )
}
