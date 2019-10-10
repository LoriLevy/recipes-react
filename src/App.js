import React, { useState, useEffect } from "react";
import * as constants from "./constants";
import { formatNumberWithCommas } from "./utilities/format-number";
import "./App.css";
import Recipe from "./recipe/recipe";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  let apiUrl = `https://api.edamam.com/search?q=${query}&app_id=${constants.APP_ID}&app_key=${constants.API_KEY}`;

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
  }, [setQuery]); /*  [query] to update only when setQuery has been run to update the state of query on form Submit*/

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  /*  this method is for the onSubmit function of the form */
  const getSearch = e => {
    /* Stop the page from refreshing */
    e.preventDefault();
    /* update the state of the Query */
    setQuery(search);
    console.log("search is:", search);
    /* now reset the textbox to empty */
    setSearch("");
  };

  return (
    <div className="App">
      <form onSubmit={updateSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={getSearch}
        />
        <button className="search-button" type="submit" onClick={getSearch}>
          Search
        </button>
      </form>

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
