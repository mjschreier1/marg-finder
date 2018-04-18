import React from 'react';
import classes from './SortButton.css';

const SortButton = (props) => {
    const sortWord = props.sortedByDistance ? "Ratings" : "Distance"

    return (
    <div>
        <button id="sortDrinks" onClick={props.toggleSort} className={classes.SortButton}>Sort by {sortWord}</button>
    </div>
    )

}

export default SortButton;