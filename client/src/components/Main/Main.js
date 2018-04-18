import React from 'react';
import Button from './Button/Button';
import ListArea from './ListArea/ListArea';
import MargMap from './MargMap/MargMap';
import classes from './Main.css';

const Main = (props) => {
    return (
        <main>
            <MargMap location={props.userLocation} 
                    data={props.establishments}
                    showMap={props.showMap} />
            <div className={classes.Absolute}>
                <div className={classes.Center}>
                    <Button trigger={props.findRandomButton}/>
                    <ListArea establishments={props.establishments} toggleModal={props.toggleModal} />
                </div>
            </div>
        </main>
    )
}

export default Main;