import React from "react";

/* import and use the css module */
import style from "./recipe.module.css";

/* rather than sending over the "props", use deconstruction   */
const Recipe = ({ title, calories, image, ingredients }) => {
  /* JS Set() removes duplicate values; iterate through the elements of a set in insertion order. 
     A value in the Set may only occur once; it is unique in the Set collection. */
  const uniqueIngredients = [
    ...new Set(ingredients.map(ingredient => ingredient.text))
  ];

  return (
    <div className={style.recipe}>
      <h1>{title}</h1>

      <ul>
        {/* map the ingredients list with a unique key */}
        {uniqueIngredients.map((ingredient, i) => {
          console.log("i is: ", i);
          return <li key={`ingredient+${i}`}>{ingredient}</li>;
        })}
      </ul>
      <p>Calories: {calories}</p>
      <img className={style.image} src={image} alt={title} />
    </div>
  );
};
export default Recipe;
