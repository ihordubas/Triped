import React from 'react';

import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';

import CardDetails from '../CardDetails/cardDetails'

import '../CardItem/cardItem.css'


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

    // create function, in this function call removeCard() and closeDialog()
  
    render () {
        const { removeCard, item} = this.props;
        const { open, showDetails } = this.state;
        if (!showDetails) {
            return (
                <div className="card-item">
                    <div 
                        // data-id={item._id.$oid} 
                        className="card-title" 
                        onClick={this.toogleShowDetails}>
                        {item.title}
                    </div>
                    <div id="remove-card-button">
                        <CloseRoundedIcon onClick={this.openDialog} />
                        <div className="dialog">
                            <Dialog open={open} onClose={this.closeDialog}>
                                <DialogTitle id="alert-dialog-title">
                                    {item.title}
                                </DialogTitle>
                                <DialogContent >
                                    <div className="alert-dialog-text">Are you sure you want to delete this item?</div>
                                    <div id="buttons-dialog">
                                        <Button 
                                            color="primary"
                                            onClick={() => removeCard(item._id.$oid)}
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
                <CardDetails id={item._id.$oid} item={item} openDialog={this.openDialog} toogleShowDetails={this.toogleShowDetails}/>
            )
        }
    }
}
