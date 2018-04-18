import React from 'react';
import Button from './Button/Button';
import ListArea from './ListArea/ListArea';
import MargMap from './MargMap/MargMap';
import SortButton from './SortButton/SortButton'
import classes from './Main.css';

const Main = (props) => {
    return (
        <main>
            <MargMap location={props.userLocation} 
                    data={props.establishments}
                    showMap={props.showMap}
                    toggleMap={props.toggleShowMap} />
            <div className={classes.Absolute}>
                <div className={classes.Center}>
                    <div className={classes.Buttons}>
                        <Button trigger={props.findRandomButton}/>
                        {props.establishments.length > 0 
                            ? <SortButton 
                                toggleSort={props.toggleSort}
                                sortedByDistance={props.sortedByDistance} /> 
                            : ""}
                    </div>
                    <ListArea establishments={props.establishments} toggleModal={props.toggleModal} />
                </div>
            </div>
        </main>
    )
}

export default Main;