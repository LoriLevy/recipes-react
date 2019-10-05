
import React, {useState, useEffect} from "react";
import * as constants from "../../constants";
import { formatNumberWithCommas } from "./utilities/format-number";
import "./App.css";
import Recipe from "./recipe/recipe";


function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch]   = useState("");
  const [query, setQuery]= useState("chicken");
  const [counter, setCounter] = useState(0);

  const apiUrl = `${constants.API_URL}?q=${query}&app_id=${constants.APP_ID}&app_key=${constants.API_KEY}`;

 
  useEffect( ()=> {
    getRecipes();
  //    },[]);            /* [] to update only when the page is first loaded */
        },[query]);      /*  [query] to update only when setQuery has been run to update the state of query */

    const getRecipes = async () => {
      const response = await fetch(apiUrl);   /* get the raw data */
      const data = await response.json();     /* format the raw data into a JSON object */
      setRecipes(data.hits);                  /* use setRecipes to update the state of the recipes object */
      console.log(data.hits);
    };

    const updateSearch = e => {
      setSearch(e.target.value);
    }

    /*  this method is for the onSubmit function of the form */
    const getSearch = e => {
      /* Stop the page from refreshing */
      e.preventDefault();
       /* update the state of the Query */
      setQuery(search);
      /* now reset the textbox to empty */
      setSearch("");
    }


  return (
    <div className="App">
      <form className="search-form">
        <input 
        className="search-bar" 
        type="text" 
        value={search}
        onChange={updateSearch}
         />
        <button className="search-button" type="submit">Search</button>
      </form>
      <h2 onClick={ () => setCounter(counter + 1)}>Counter isnow: {counter}</h2>
      <div className="recipe-div">
      {/* we use recipe =>() with parentheses inste4ad of curly braces because we we want to return some html */}
        {recipes.map(recipe =>(
          <Recipe 
          key={recipe.recipe.label}  {/* must have a uique key or you get an error */}
          title={recipe.recipe.label}
          calories={Math.round(formatNumberWithCommas(recipe.recipe.calories))}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
          />
        ) )}
      </div>
    </div>

   
  );
}

export default App;
