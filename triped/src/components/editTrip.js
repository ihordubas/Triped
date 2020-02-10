import React from 'react';

import EditRoundedIcon from '@material-ui/icons/EditRounded';
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';


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
            open: false,
        })
    };
    
    render() {
        const { open } = this.state
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
                            <input placeholder="city"></input>
                            <input></input>
                            <input></input>
                            <input></input>
                        </div>
                        <div className="edit-price">
                            <input></input>
                        </div>
                        <div id="buttons-dialog">
                            <Button onClick={this.closeDialog} >Cancel</Button>
                            <Button >Save</Button>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        )
    }
    
}