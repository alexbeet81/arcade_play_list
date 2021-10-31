import React from "react";
import "./GameCard.css";

const GameCard = (props) => {
  return (
    <div className="game__card">
      <img src={props.cover} alt="game cover" />
      <div className="game__titles">
        <div className="game__game_name">{props.name}</div>
        <div className="game__game_genre">{props.genre}</div>
      </div>
    </div>
  );
};

export default GameCard;
