import React from 'react';
import './card.css'

export default class CardItem extends React.Component {
    render () {
        return (
            <div class="card-item">
                <div className="card-title">{this.props.title}</div>
            </div>
        )
    }
}
