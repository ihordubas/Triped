import React from 'react';

import TextField from '@material-ui/core/TextField';

import CardItem from './cardItem'
import request from "../services/request";

import './card.css'


export default class CardContainer extends React.Component {
    state = {
        cardList: [],
        loading: true,
        error: false,
        title: ''
    }

    componentDidMount() {
        this.queryData()
    }

    queryData = () => {
        const url = '/trips';

        request.get(url)
            .then(response => {
                this.setState({
                    cardList: response.data,
                    'loading': false,
                    'error': false
                });
            })
            .catch(() => {
                this.setState({
                    error: true
                });
            })
    };

    onChangeTitle = event => {
        this.setState({ title: event.target.value });
      }
    
    addTrip = () => {
        const trip = {
            title: this.state.title
        } 
        
        request.post('/trips',  trip )
            .then(response => {
                this.setState({
                    cardList: [...this.state.cardList, {id: new Date(), title: this.state.title}],
                    title: ''
                })
            })
    }

    removeCard = (item_id) => {
        request.remove('/trips/' + item_id)
            .then(res => {
               // this.setState ...
            })
    }
    
    render () {
        const { error, loading } = this.state;
        if (error) return <div>Data could not be loaded</div>
        else if (loading) return <div>Loading data...</div>
        else  return (
            <>
                <form id="card-input" onBlur={this.addTrip}>
                    <TextField   
                        size="medium"
                        onChange={this.onChangeTitle}
                        label="Where are you going next?" 
                    />
                </form>
                <div className="card-grid">                
                    {this.state.cardList.map(item => 
                        <CardItem 
                            // key={item._id.$oid} 
                            item={item} 
                            removeCard={this.removeCard} 
                            title={item.title} 
                        />  
                    )}
                </div>
            </>
        )
    }
}
