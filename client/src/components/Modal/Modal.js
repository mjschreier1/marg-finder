import ReactStars from 'react-stars'
import React from 'react';
import classes from './Modal.css'

const Modal = (props) => {

    return (
        <div className={classes.Modal} onClick={() => props.toggle()}>
            <div className={classes.OuterWrapper}>
                <div className={classes.InnerWrapper} onClick={() => {console.log("clicked")}}>
                    <h2 className={classes.Charcoal}>{props.place.name}</h2>
                    <p className={classes.Charcoal}>{props.place.address}</p>
                    <p className={classes.Charcoal}>{props.place.phone}</p>
                    <p className={classes.Charcoal}>{props.place.description}</p>
                    <p>Rate This Marg:</p>
                    <ReactStars
                        count={5}
                        size={24}
                        half={false}
                        onChange={(newRating)=>props.rateMargs(props.place.id, newRating)}
                        color2={'#ffd700'} />
                </div>
            </div>
        </div>
    );
}

export default Modal;