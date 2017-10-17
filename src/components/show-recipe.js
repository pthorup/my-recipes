import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/show-recipe.css';

class ShowRecipe extends Component {
  constructor(props) {
    super(props);

    // Get from localStorage
    let recipes = JSON.parse(localStorage.getItem("recipes"));
    let recipeId = this.props.match.params.id;
    let ingredients = '';
    let directions = '';

    if(!recipes || !recipes[this.props.match.params.id]) {
      this.state = {
        message : "recipe-not-found"
      }
    } else {
      if(recipes[recipeId].ingredients) {
        ingredients = recipes[recipeId].ingredients.split(".");
      }
      if(recipes[recipeId].directions) {
        directions = recipes[recipeId].directions.split(".");
      }

      this.state = {
        recipes : recipes,
        title : recipes[recipeId].title,
        ingredients : ingredients,
        directions : directions,
      }

      this.showRecipeContent = this.showRecipeContent.bind(this);
    }
  }

  showRecipeContent(content){
    //Split directions/ingredients into a list
    if(content !== ''){
      return content.map((data, index) => {
        // Trim the spaces. If user only has blank spaces then <li> tags will not render.
        let dataTrimed = data.replace(/^\s+/, '').replace(/\s+$/, '');

        if(dataTrimed){
          return <li key={index}>{data}</li>;
          }
          return '';
        });
    }
    return <span>Not specified.</span>;
  }

  onDeleteRecipe(){
    this.setState({
      recipes: delete this.state.recipes[this.props.match.params.id],
      message: "recipe-delete"
    });
    // Store in localStorage
    localStorage.setItem("recipes", JSON.stringify(this.state.recipes));

  }

  render() {
    if(this.state.message === "recipe-delete") {
      //return message saying recipe deleted
      return (
        <div className="container show-recipe-page">
          <span>Recipe deleted</span>
        </div>
      );
    }
    if(this.state.message === "recipe-not-found") {
      return (
        <div className="container show-recipe-page">
          <span>Not found</span>
        </div>
      );
    }

    return (
      <div className="container show-recipe-page">
        <h2>{this.state.title}</h2>
        <h4>Ingredients</h4>
        <ul className="ingredientList">{this.showRecipeContent(this.state.ingredients)}</ul>
        <h4>Directions</h4>
        <ul className="directionList">{this.showRecipeContent(this.state.directions)}</ul>
        <button
          className="btn btn-primary"
          onClick={() => this.onDeleteRecipe()}
          >Delete Recipe
        </button>
        <Link to={`/edit-recipes/${this.props.match.params.id}`} className="btn btn-primary">Edit Recipe</Link>
      </div>
    );
  }
}

export default ShowRecipe;
