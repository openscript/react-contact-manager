import React from 'react';
import {ContactsContainer} from "../containers/ContactsContainer";
import {DashboardContainer} from "../containers/DashboardContainer";
import {ParametersContainer} from "../containers/ParametersContainer";
import {BrowserRouter, Route, Switch} from "react-router-dom";

export const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Switch>
                    <Route path='/' exact component={DashboardContainer} />
                    <Route path='/contacts' component={ContactsContainer} />
                    <Route path='/parameters/:id' component={ParametersContainer} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}
