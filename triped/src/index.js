import React from 'react';
import ReactDOM from 'react-dom';

import CardContainer from './components/cardContainer'

import './index.css';


class Triped extends React.Component {
    render () {
        return (
            <div>
                <CardContainer />
            </div>
        )
    }
}

ReactDOM.render(<Triped />, document.getElementById('root'));