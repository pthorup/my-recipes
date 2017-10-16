import React from 'react';
import '../styles/recipe-list.css';
import RecipeListItem from './recipe-list-item';


const RecipeList = () => {
  // Get from localStorage
  let recipes = JSON.parse(localStorage.getItem("recipes"));
  let recipeList = [];


  if(recipes === null || !Object.keys(recipes).length){
     recipeList.push(<p>No recipe found.</p>);
  } else {
    // Loop through the recipe object
    for (const key of Object.keys(recipes)) {
      recipeList.push(<RecipeListItem key = {recipes[key].id} recipe = {recipes[key]} />);
    }
  }

  return (
    <div className="container main-page">
      <ul className="recipeList">
        {recipeList}
      </ul>
    </div>
  );
}



export default RecipeList;
