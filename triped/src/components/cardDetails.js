import React from 'react';

import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';

import {HouseData, MovingData} from "./tripData";


export default class CardDetails extends React.Component {

    sumOfPrices = () => {
        const { item } = this.props
        return item.trips.reduce((prevValue, currentValue) => prevValue.price + currentValue.price)
    }

    render () {
        const { toogleShowDetails, item } = this.props
        return (
            <div className="card-details">
                <div className="card-title-inside" onClick={toogleShowDetails}>{item.title}</div>
                 {item.trips && item.trips.map(trip => {
                    if (trip.type == 'house') return <HouseData data={trip} />
                    else return <MovingData data={trip}/>
                })}
                <div className="button-plus">
                    <AddBoxOutlinedIcon style={{ fontSize: 40 }} />
                </div>
            </div>
        )
    }
}