import React from 'react';
import classes from './Modal.css'

const Modal = (props) => {

    return (
        <div className={classes.Modal} onClick={() => props.toggle()}>
            <div className={classes.OuterWrapper}>
                <div className={classes.InnerWrapper}>
                    <h2 className={classes.Charcoal}>{props.place.name}</h2>
                    <p className={classes.Charcoal}>{props.place.address}</p>
                    <p className={classes.Charcoal}>{props.place.phone}</p>
                    <p className={classes.Charcoal}>{props.place.description}</p>
                </div>
            </div>
        </div>
    );
}

export default Modal;