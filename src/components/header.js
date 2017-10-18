import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

const Header = () => {
  return (
    <header>
      <Link to="/my-recipes/">
        <h1>My Recipes</h1>
      </Link>
      <Link to="/my-recipes/add-recipe" className="btn btn-primary">
        Add Recipe
      </Link>
    </header>
  );
}

export default Header;
