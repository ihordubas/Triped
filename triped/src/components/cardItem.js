import React from 'react';

import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';

import CardDetails from './cardDetails'

import './card.css'


export default class CardItem extends React.Component {
    state = {
        open: false,
        showDetails: false
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

    toogleShowDetails = () => {
        this.setState({
            showDetails: !this.state.showDetails
        })
    }

    render () {
        const { removeCard, item} = this.props;
        const { open, showDetails } = this.state;
        if (!showDetails) {
            return (
                <div className="card-item">
                    <div 
                        data-id={item.id} 
                        className="card-title" 
                        onClick={this.toogleShowDetails}>
                        {this.props.title}
                    </div>
                    <div id="remove-card-button">
                        <CloseRoundedIcon onClick={this.openDialog} />
                        <div className="dialog">
                            <Dialog open={open} onClose={this.closeDialog}>
                                <DialogTitle id="alert-dialog-title">
                                    {this.props.title}
                                </DialogTitle>
                                <DialogContent >
                                    <div className="alert-dialog-text">Are you sure you want to delete this item?</div>
                                    <div id="buttons-dialog">
                                        <Button 
                                            data-id={item.id} 
                                            color="primary"
                                            onClick={() => removeCard(item.id)}
                                            >Yes
                                        </Button>
                                        <Button onClick={this.closeDialog} color="primary">No</Button>
                                    </div>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <CardDetails item={item} openDialog={this.openDialog} toogleShowDetails={this.toogleShowDetails}/>
            )
        }
    }
}
