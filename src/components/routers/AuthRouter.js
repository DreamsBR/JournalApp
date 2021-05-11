import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { LoginScreem } from '../auth/LoginScreem'
import { RegisterScreem } from '../auth/RegisterScreem'

export const AuthRouter = () => {
    
    return (
        <div className="auth_main">
            <div className="auth_box-container">

                <Switch>
                    <Route  exact path="/auth/login" component={LoginScreem}/>
                    <Route  exact path="/auth/register" component={RegisterScreem}/>
                    <Redirect to="/auth/login"/>
                </Switch>
            </div>
        </div>
    )
}
