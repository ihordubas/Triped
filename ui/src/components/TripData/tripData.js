import React from 'react';

import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import DriveEtaRoundedIcon from '@material-ui/icons/DriveEtaRounded';
import DirectionsBusRoundedIcon from '@material-ui/icons/DirectionsBusRounded';

import EditTrip from '../EdiTrip/editTrip'

import './tripData.css'


class HouseData extends React.Component {
    render () {
        const { data, getItem, id, updateRequest } = this.props
        return (
            <>
                <div className="card-label">
                    <div className="card-data">
                        <div className="label-icon"><HomeRoundedIcon fontSize="large"/></div>
                        <div className="label-date">
                            <div>{data.ckeckOut}</div>
                            <div>{data.checkIn}</div>
                        </div>
                        <div className="label-destination">
                            <div>{data.addressCity}</div>
                            <div>{data.addressStreet}</div>
                        </div>
                        <div className="label-price">{data.price}$</div>
                    </div>
                    <div className="card-buttons">
                        <EditTrip updateRequest={updateRequest} id={id} data={data} getItem={getItem}/>
                        <CloseRoundedIcon fontSize="small"/>
                    </div>
                </div>
            </>
         )
    }
}

class MovingData extends React.Component {
    icons = {
        plane: <FlightTakeoffIcon fontSize="large"/>,
        car: <DriveEtaRoundedIcon fontSize="large"/>,
        bus: <DirectionsBusRoundedIcon fontSize="large"/>
    }
    
    render () {
        const { data, getItem, id, updateRequest } = this.props
        return (
            <>  
                <div className="card-label">
                    <div className="card-data">
                        <div className="label-icon">{this.icons[data.type]}</div> 
                        <div className="label-date">
                            <div>{data.startDate}</div>
                            <div>{data.endDate}</div>
                        </div>
                        <div className="label-destination">
                            <div>{data.startPoint}</div>
                            <div>{data.endPoint}</div>
                        </div>
                        <div className="label-price">{data.price}$</div>
                    </div>
                    <div className="card-buttons">
                        <EditTrip updateRequest={updateRequest} id={id} data={data} getItem={getItem}/>
                        <CloseRoundedIcon fontSize="small"/>
                    </div>
                </div>                    
            </>
        )
    }
}


export {HouseData, MovingData}