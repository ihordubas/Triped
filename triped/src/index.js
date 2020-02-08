import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";

import CardContainer from './components/cardContainer'
import EditTrip from './components/editTrip'

import './index.css';


class Triped extends React.Component {
    render () {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path='/trips' component={CardContainer}/>
                        <Route path='/trips/:id' component={EditTrip}/>
                        <Redirect path='*' to ='trips' />
                    </Switch>
                </Router>
            </div>
        )
    }
}

ReactDOM.render(<Triped />, document.getElementById('root'));