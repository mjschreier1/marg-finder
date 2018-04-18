import React from 'react';
import classes from './Button.css';

const Button = (props) => (
    <div>
        <button id="findDrinks" onClick={props.trigger} className={classes.GetButton}><span className={classes.Find}>Find</span> <span className={classes.Margs}>Margs!</span></button>
    </div>
);

export default Button;