import React from 'react';

import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';

import {HouseData, MovingData} from "./tripData";


export default class CardDetails extends React.Component {
     sumOfPrices = () => {
          const { item } = this.props
          let sum = 0
          item.trips.map(item => {
              sum += item.price
          })
          return sum
    }

    render () {
        const { toogleShowDetails, item } = this.props
        return (
            <div className="card-details">
                <div className="card-title-inside" onClick={toogleShowDetails}>{item.title}</div>
                 {item.trips.map(trip => {
                    if (trip.type == 'house') return <HouseData data={trip} />
                    else return <MovingData data={trip}/>
                })}
                {this.sumOfPrices()}
                <div className="button-plus">
                    <AddBoxOutlinedIcon style={{ fontSize: 40 }} />
                </div>
            </div>
        )
    }
}