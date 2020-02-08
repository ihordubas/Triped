import React from 'react';

import TextField from '@material-ui/core/TextField';

import CardItem from './cardItem'
import {data} from './mockedData';

import './card.css'


export default class CardContainer extends React.Component {
    state = {
        cardList: []
    }
   
    addTrip = () => {
        this.setState({
            cardList: [...this.state.cardList, {id: new Date().getTime() + '', title: 'France - Germany', trips: data}]
        })
    }

    removeCard = (item_id) => {
        const arr = this.state.cardList.filter(item => item.id !== item_id)
        this.setState({ cardList: arr })
    }

    render () {
        return (
            <>
                <div id="card-input">
                    <TextField   
                        size="medium"
                        onBlur={this.addTrip}
                        label="Where are you going next?" 
                    />
                </div>
                <div className="card-grid">
                    
                    {this.state.cardList.map(item => 
                        
                        <CardItem key={item.id} item={item} removeCard={this.removeCard} title={item.title} />  
                        
                    )}
                </div>
              
            </>
        )
    }
}