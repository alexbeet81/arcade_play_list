import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import './NavBar.css';

const NavBar = (props) => {
  const [enteredGameSearch, setEnteredGameSearch] = useState("");
  const history = useHistory();

  const searchChangeHandler = (event) => {
    setEnteredGameSearch(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    props.onSaveSearchData(enteredGameSearch);
    setEnteredGameSearch("");
    history.push('/games');
  };

  return (
    <div className="nav_bar__main">
      <div className="nav_bar__search">
        <form onSubmit={submitHandler}>
          <input
            value={enteredGameSearch}
            type="text"
            placeholder="name..."
            onChange={searchChangeHandler}
          />
          <button 
            className="nav_bar__button" 
            type="submit">search</button>
        </form>
      </div>
    </div>
  )
};

export default NavBar;