import React, { useState } from "react";
import axios from "axios";

const StarWarSearch = (props) => {
  const [starWar, setStarWar] = useState(null);
  const [selecter, setSelecter] = useState("people");
  const [number, setNumber] = useState(1);

  const clickHandler = () => {
    axios
      .get(`https://swapi.dev/api/${selecter}/${number}`)
      .then((response) => {
        setStarWar(response.data);
      });
  };

  return (
    <div>
      <select
        name="selecter"
        value={selecter}
        onChange={(event) => setSelecter(event.target.value)}
      >
        <option value="people">People</option>
        <option value="films">Films</option>
        <option value="starships">Starships</option>
        <option value="vechicles">Vechicles</option>
        <option value="species">Species</option>
        <option value="planets">Planets</option>
      </select>

      <input
        type="number"
        min="1"
        value={number}
        onChange={(event) => setNumber(event.target.value)}
      />

      <button onClick={clickHandler}>Search</button>

      {starWar !== null && (
        <div>
          <h2>{starWar.title}</h2>
          <p>{starWar.episoed_id}</p>
          <p>{starWar.opening_crawl}</p>
          <h2>{starWar.name}</h2>
          <p>Model: {starWar.model}</p>
          <p>Height: {starWar.height}</p>
          <p>Hair Color: {starWar.hair_color}</p>
          <p>Eye Color: {starWar.eye_color}</p>
          <p>Gender: {starWar.gender}</p>
          <p>Mass: {starWar.mass}</p>
          <p>Skin Color: {starWar.skin_color}</p>
          <p>Birth Year: {starWar.birth_year}</p>
          <p>Species: {starWar.species}</p>
          <p>Vehicles: {starWar.vehicles}</p>
          <p>Starships: {starWar.starships}</p>
          <p>Home World: {starWar.homeworld}</p>
          <p>Films: {starWar.films}</p>
        </div>
      )}
    </div>
  );
};

export default StarWarSearch;
