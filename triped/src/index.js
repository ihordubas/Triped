import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CardContainer from './components/cardContainer'

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