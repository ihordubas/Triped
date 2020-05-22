import React from 'react';

import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';

import {HouseData, MovingData} from "./tripData";
import request from "../services/request";


export default class CardDetails extends React.Component {
    state = {
        error: false,
        trip: []
    }

    componentDidMount() {
        this.getItem()
    }
    
    getItem = () => {  
        request.get('/trips/' + this.props.id)
        .then(response => {
            this.setState({
                trip: response.data,
                'error': false
            });
        })
        .catch(() => {
            this.setState({
                error: true
            });
        })
    };

    updateRequest = (updateTrip) => {
        const { _id, ...trip } = this.state.trip
        trip.trips[updateTrip.id] = updateTrip
        const url = '/trips/' +  _id.$oid
        console.log(_id)

        request.put(url, trip)
            .then(response => {
                console.log(response.data)
                this.getItem()
            })
        this.setState({
            open: false
        })
    }
    
    // componentDidMount ()
    //get request with id, put in state and change ітем на ітем зі стейту
    //гет айтем в компонет дід маунт (квері дата)
    sumOfPrices = () => {
        const { item } = this.props
        return item.trips.reduce((prevValue, currentValue) => prevValue.price + currentValue.price)
    }

    render () {
        const { trip } = this.state
        const { toogleShowDetails, id } = this.props
        return (
            <div className="card-details">
                <div className="card-title-inside" onClick={toogleShowDetails}>{trip.title}</div>
                 {trip.trips && trip.trips.map(element => {
                    if (element.type == 'house') return <HouseData updateRequest={this.updateRequest} id={id} data={element} getItem={this.getItem} />
                    else return <MovingData updateRequest={this.updateRequest} id={id} data={element} getItem={this.getItem}/>
                })}
                <div className="button-plus">
                    <AddBoxOutlinedIcon style={{ fontSize: 40 }} />
                </div>
            </div>
        )
    }
}