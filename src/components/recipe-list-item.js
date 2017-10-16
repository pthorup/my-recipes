import React from 'react';
import { Link } from 'react-router-dom';

const RecipeListItem = ({recipe}) => {
  console.log(recipe.id);
  return (
    <Link to={`/recipes/${recipe.id}`}  key={recipe.id}>
      <li value={recipe.id}>
         {recipe.title}
      </li>
    </Link>
  );
}

export default RecipeListItem;
