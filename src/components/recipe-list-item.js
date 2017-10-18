import React from 'react';
import { Link } from 'react-router-dom';

const RecipeListItem = ({recipe}) => {
  return (
    <Link to={`/my-recipes/recipes/${recipe.id}`}  key={recipe.id}>
      <li value={recipe.id}>
         {recipe.title}
      </li>
    </Link>
  );
}

export default RecipeListItem;
