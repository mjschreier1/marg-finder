import React from 'react';
import classes from './ListArea.css'

const ListArea = (props) => {
    
    const list = props.establishments.map((establishment, i)=>{
        return (
            <li key={establishment.id} onClick={() => props.toggleModal(i)} className={classes.ListItem}>
                <p className={classes.PaddingLeft}>{establishment.name}</p>
                <p className={classes.PaddingRight}>{establishment.distance}</p> 
            </li>
        )
    })

    return (
        <div>
            <ul>
                {list}
            </ul>
        </div>
    )
};

export default ListArea;