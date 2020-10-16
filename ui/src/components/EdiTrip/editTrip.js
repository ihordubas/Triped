import React from 'react';

import EditRoundedIcon from '@material-ui/icons/EditRounded';
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import request from "../../services/request";

import './editTrip.css'


export default class EditTrip extends React.Component {
    state = {
        open: false
    };
   
    openDialog = () => {
        this.setState({
            open: true
        })
    };

    closeDialog = () => {
        this.setState({
            open: false
        })
    };

    onChangeType = event => {
        this.setState({ [event.target.name]: event.target.value });
      }

    updateTrip = () => {
        const data = {
             type: 'house',
             id: 0,
             checkIn: this.state.checkIn,
             checkOut: this.state.checkOut,
             price: this.state.price,
             adressCity: this.state.adressCity,
             adressStreet: this.state.adressStreet
        }

        const { updateRequest, getItem } = this.props
        updateRequest(data)
        this.setState({
            open: false
        })
    }
    

//метод апдейт реквест сенд апдейт, закриває вікно і втклаикєа гет айтем з пропсів, 
    render() {
        
        const { open, city } = this.state
        const { data } = this.props
        return (
            <div>
                <EditRoundedIcon onClick={this.openDialog}  fontSize="small"/>
                <Dialog open={open} onClose={this.closeDialog}>
                    <DialogTitle id="alert-dialog-title">
                        {data.type}
                    </DialogTitle>
                    <DialogContent >
                        <div className="edit-inputs">
                            <input name="checkIn" onChange={this.onChangeType} placeholder="checkIn"></input>
                            <input name="checkOut" onChange={this.onChangeType}></input>
                            <input name="adressCity" onChange={this.onChangeType}></input>
                            <input name="adressStreet" onChange={this.onChangeType}></input>
                        </div>
                        <div className="edit-price">
                            <input name="price" onChange={this.onChangeType}></input>
                        </div>
                        <div id="buttons-dialog">
                            <Button onClick={this.closeDialog} >Cancel</Button>
                            <Button onClick={this.updateTrip}>Update</Button>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        )
    }
    
}