import React from "react";
import { ExternalLink } from "react-external-link";

function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <ExternalLink className="cards_item_link" href={props.url}>
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img className="cards__item__img" alt="Thumbnail" src={props.src} />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
          </div>
        </ExternalLink>
      </li>
    </>
  );
}

export default CardItem;
