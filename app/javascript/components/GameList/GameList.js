import React from "react";

import ReactPlayer from "react-player";

import "./GameList.css";
import GameCard from "../Game/GameCard";

const GameList = (props) => {
  return (
    <div>
      <div className="game_list__container">
        <div>
          {props.games.map((game, index) => {
            return (
              <GameCard
                key={game.id}
                id={game.id}
                cover={game.cover}
                name={game.name}
                genre={game.genres[0].name}/>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GameList;
