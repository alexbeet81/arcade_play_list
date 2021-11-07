import React from "react";
import "./GameCard.css";
import { Pixelify } from "react-pixelify";

const GameCard = (props) => {

  const image = props.cover;
  return (
    <div className="game__card">
      {/* <Pixelify
        width={148}
        src={image}
        pixelSize={20}
      /> */}
      <img src={props.cover} alt="game cover" />
      <div className="game__titles">
        <div className="game__game_name">{props.name}</div>
        <div className="game__game_genre">{props.genre}</div>
      </div>
    </div>
  );
};

export default GameCard;
