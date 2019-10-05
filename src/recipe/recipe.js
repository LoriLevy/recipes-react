import React from "react";

/* import and use the css module */
import style from "./recipe.module.css";

/* rather than sending over the "props", we will use deconstruction by placing the specific state of each prop into a set of curly braces  */
const Recipe = ({title, calories, image, ingredients}) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ul>
               {/* map the infredients list */}
               {ingredients.map(ingredient => (
                   <li>{ingredient.text}</li>
               ))}
            </ul>
            <p>Calories: {calories}</p>
            <img className={style.image} src={image} alt={title} />
        </div>
    );
}
export default Recipe;
