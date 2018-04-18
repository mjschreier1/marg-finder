import React from "react";
import ReactStars from "react-stars";
import classes from './ListArea.css';

const ListArea = props => {
  const list = props.establishments.map((establishment, i) => {
    const starRating = establishment.avgRating ? (
      <ReactStars
        count={5}
        size={16}
        color2={"#ffd700"}
        value={establishment.avgRating}
        edit={false}
        className={classes.Stars}
      />
    ) : (
      <p className={classes.NoRating}>Click to Rate!</p>
    );

    return (
      <li key={establishment.id} onClick={() => props.toggleModal(i)} className={classes.ListItem}>
        <div>
          <p className={classes.PaddingLeft}>{establishment.name}</p>
          {starRating}
        </div>
        <p className={classes.PaddingRight}>{establishment.distance}</p>
      </li>
    );
  });

  return (
    <div>
      <ul>{list}</ul>
    </div>
  );
};

export default ListArea;
