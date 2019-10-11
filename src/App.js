import React, { useState, useEffect } from "react";
import * as constants from "./constants";
import { formatNumberWithCommas } from "./utilities/format-number";
import "./App.css";
import Recipe from "./recipe/recipe";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("chicken");
  
  let apiUrl = `https://api.edamam.com/search?q=${search}&app_id=${constants.APP_ID}&app_key=${constants.API_KEY}`;

  const getRecipes = async () => {
    const response = await fetch(apiUrl); /* get the raw data */
    const data = await response.json(); /* format the raw data into a JSON object */
    setRecipes(
      data.hits
    ); /* use setRecipes to update the state of the recipes object */
    console.log(data.hits);
  };

  useEffect(() => {
    getRecipes();
  }, []); /*  update only when page loads */

  /*  this method is for the submit button click */
  const getSearch = e => {
    getRecipes();
  };

  const updateTextboxForSearch = (e) => {
    setSearch(e.target.value);
  }

  return (
    <div className="App">
      <div className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateTextboxForSearch}
        />
        <button className="search-button" type="button" onClick={getSearch}>
          Search
        </button>
      </div>

      <div className="recipe-div">
        {/* we use recipe =>() with parentheses instead of curly braces because we we want to return some html */}
        {recipes.map((item, i) => {
          // due to recipe.recipe we convert it to item, with this constant
          const recipe = item.recipe;
          //we added the return we are using the constant above
          return(
          <Recipe
            key={`${recipe}-${i}`}
            title={recipe.label}
            calories={formatNumberWithCommas(recipe.calories)}
            image={recipe.image}
            ingredients={recipe.ingredients}
          />
          )})}
      </div>
    </div>
  );
}

export default App;
