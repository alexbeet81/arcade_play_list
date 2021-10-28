import React, { useState } from "react";
import "./GameList.css";
import axios from "axios";

const GameList = () => {
  const [enteredGameSearch, setEnteredGameSearch] = useState("");
  const [gamesList, setGamesList] = useState([]);
  // const [gameCover, setGameCover] = useState("");

  const searchChangeHandler = (event) => {
    setEnteredGameSearch(event.target.value);
  };

  const searchGameHandler = (event) => {
    event.preventDefault();

    const search = enteredGameSearch;
    axios({
      url: "http://localhost:3030/https://api.igdb.com/v4/games",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Client-ID": "kbfk11t8q6lb33clzkf074fflfrk2b",
        Authorization: "Bearer 0r29zp7b8uwswd6rjed08svor0h0jf",
      },
      // data: "fields age_ratings,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,checksum,collection,cover,created_at,dlcs,expanded_games,expansions,external_games,first_release_date,follows,forks,franchise,franchises,game_engines,game_modes,genres,hypes,involved_companies,keywords,multiplayer_modes,name,parent_game,platforms,player_perspectives,ports,rating,rating_count,release_dates,remakes,remasters,screenshots,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos,websites;"
      // data: `fields name; search "${search}";`,
      data: `fields name,
             platforms,
             player_perspectives,
             rating,
             rating_count,
             total_rating,
             release_dates,
             cover.image_id,
             screenshots,
             platforms.name,
             genres,
             storyline;
             search "${search}";`,
    })
      .then((res) => {
        const gamesArray = [];
        const respList = res.data;
        console.log(respList);

        respList.map((game) => {
          const gameImage = game.cover.image_id;
          const gameCover = `https://images.igdb.com/igdb/image/upload/t_cover_big/${gameImage}.jpg`;

          let platformNameArray;

          console.log(game.genres, "genres line 54");
    
          if (typeof game.platforms !== "object") {
            platformNameArray = [];
          } else {
            platformNameArray = game.platforms;
          }

          const gameObject = {
            id: game.id,
            name: game.name,
            rating: game.rating,
            storyline: game.storyline,
            genres: game.genres,
            platforms: platformNameArray,
            cover: gameCover,
          };
          gamesArray.push(gameObject);
        });
        setGamesList(gamesArray);
      })
      .catch((err) => {
        console.error(err);
      });
    setEnteredGameSearch("");
  };

  // ----- return method ----- //
  return (
    <div>
      <div className="search_bar">
        <form onSubmit={searchGameHandler}>
          <input
            value={enteredGameSearch}
            type="text"
            placeholder="search"
            onChange={searchChangeHandler}
          />
          <button type="submit">Button</button>
        </form>
      </div>
      <div>
        <ul>
          {gamesList.map((game, index) => {
            return (
              <div>
                <li>{game.name}</li>
                <li>{game.rating}</li>
                <div>
                  {game.platforms.map((plat, index) => (
                    <p>{plat.name}</p>
                  ))}
                </div>
                <li>{game.storyline}</li>
                <img src={game.cover} alt="game cover" />
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default GameList;
