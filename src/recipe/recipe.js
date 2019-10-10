import React from "react";

/* import and use the css module */
import style from "./recipe.module.css";

/* rather than sending over the "props", we will use deconstruction by placing the specific state of each prop into a set of curly braces  */
const Recipe = ({title, calories, image, ingredients}) => {
    //remove the duplicates with JS Set
    const uniqueIngredients = [...new Set(ingredients.map(ingredient => ingredient.text))]; //JS Set function removes duplicate values
    console.log("unique Ingredients is:", uniqueIngredients);

    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
        
            <ul>
               {/* map the ingredients list */}
               
               {uniqueIngredients.map((ingredient, i) => {  
                   console.log("i is: ", i);                 
                    return (<li key={`ingredient+${i}`}>{ingredient}</li>);
               } 
                
               )}
            </ul>
            <p>Calories: {calories}</p>
            <img className={style.image} src={image} alt={title} />
        </div>
    );
}
export default Recipe;

