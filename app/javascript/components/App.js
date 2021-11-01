import React, { useState } from 'react';
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GameList from './GameList/GameList';
import NavBar from './NavBar/NavBar'; 
import GameShow from './Game/GameShow';

const App = () => {
  const [gamesList, setGamesList] = useState([]);

  const searchGameHandler = (enteredGameSearch) => {
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
             screenshots.image_id,
             platforms.name,
             genres.name,
             summary,
             videos.video_id,
             artworks.image_id,
             artworks.url,
             storyline;
             search "${enteredGameSearch}";`,
    })
      .then((res) => {
        const gamesArray = [];
        const respList = res.data;
        console.log(respList, "respList line 45");

        respList.map((game) => {
          const gameImage = game.cover.image_id;
          const gameCover = `https://images.igdb.com/igdb/image/upload/t_cover_big/${gameImage}.jpg`;

          let platformNameArray;
          let genreArray;
          let videoIdArray;
          
          // checking if some arrays are undifined
          typeof game.platforms !== "object" ? platformNameArray = [{ name: "platform unknown"}] : platformNameArray = game.platforms;
          typeof game.genres !== "object" ? genreArray = [{ name: "genre unknown"}] : genreArray = game.genres;
          typeof game.videos !== "object" ? videoIdArray = [{video_id: 'GED9p33VYIw'}] : videoIdArray = game.videos;

          const gameObject = {
            id: game.id,
            name: game.name,
            rating: game.rating,
            storyline: game.storyline,
            summary: game.summary,
            genres: genreArray,
            platforms: platformNameArray,
            cover: gameCover,
            videos: videoIdArray,
          };
          gamesArray.push(gameObject);
        });
        setGamesList(gamesArray);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <NavBar onSaveSearchData={searchGameHandler}/>
      <Router>
        <Switch>
          <Route path="/show" exact>
            <GameList games={gamesList}/>
          </Route>
          <Route path="/:id">
            <GameShow games={gamesList}/>
          </Route>
        </Switch>
      </Router>
    </div>
  )
};

export default App;