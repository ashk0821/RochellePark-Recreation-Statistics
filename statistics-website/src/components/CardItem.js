import React from "react";
import ReactPlayer from "react-player";

function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <ReactPlayer className="cards_item_link" url={props.url}>
          <figure
            className="cards__item__pic-wrap"
            data-category={props.label}
          ></figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
          </div>
        </ReactPlayer>
      </li>
    </>
  );
}

export default CardItem;
