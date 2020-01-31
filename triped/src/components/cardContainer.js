import React from 'react';
import './card.css'
import CardItem from '../components/cardItem'

export default class CardContainer extends React.Component {
    state = {
        cardList: []
    }
    
    addTrip = () => {
        this.setState({
            cardList: [...this.state.cardList, {id: new Date(), title: 'Germany - France'}]
        })
    }

    render () {
        return (
            <>
                <div className="title-question">Where are you going next?
                    <button className="add-trip-button" onClick={this.addTrip}>Add Trip</button>
                </div>
                <div className="card-grid">
                    {this.state.cardList.map(item => 
                        <CardItem key={item.id} title={item.title} />    
                    )}
                </div>
            </>
        )
    }
}