import React from "react";
import {Link} from "react-router-dom";

import "./GameList.css";
import GameCard from "../Game/GameCard";

const GameList = (props) => {
  return (
    <div>
      <div className="game_list__container">
        <div>
          {props.games.map((game, index) => {
            return (
              <Link key={game.id} to={`/game/${game.id}`}>
                <GameCard
                  id={game.id}
                  cover={game.cover}
                  name={game.name}
                  genre={game.genres[0].name}/>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GameList;
