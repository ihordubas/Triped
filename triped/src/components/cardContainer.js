import React from 'react';

import TextField from '@material-ui/core/TextField';

import CardItem from './cardItem'
import {data} from './mockedData';
import request from "../services/request";

import './card.css'


export default class CardContainer extends React.Component {
    state = {
        cardList: [],
        loading: true,
        error: false
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
        const { error, loading, data } = this.state;
        console.log(data)
        if (error) return <div>Data could not be loaded</div>;
        else if (loading) return <div>Loading data...</div>;
        else  
            return (
                <div className="card-grid">                
                    {this.state.cardList.map(item => 
                        <CardItem key={item._id.$oid} item={item} removeCard={this.removeCard} title={item.title} />  
                    )}
                </div>
            )
    }
}