import React, { Component } from 'react';
import '../styles/add-recipe.css';

class AddRecipe extends Component {
  constructor(props){
    super(props);

    // Get from localStorage
    let recipes = JSON.parse(localStorage.getItem("recipes"));

    if( !recipes  || !this.props.match.params.id ){ // Edit recipe
      this.state = {
        title: "",
        ingredients: "",
        directions: "",
        recipeSaved: false
      };
      // No recipes stored
      recipes=== null ? this.state = { recipes: null } : this.state = { recipes: recipes };

    } else {

      let ingredients = recipes[this.props.match.params.id].ingredients;
      let directions = recipes[this.props.match.params.id].directions;

      this.state = {
        recipes : recipes,
        title : recipes[this.props.match.params.id].title,
        ingredients : ingredients,
        directions : directions,
        recipeId: this.props.match.params.id,
        recipeSaved: false
      };
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);

  }

  onInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value
    });
  }

  onFormSubmit(e) {
    e.preventDefault();

    if(this.state.recipes === null) {
      let recipes = {}; // Let it be an object rather than an array so it is easier to find recipe with just the id rather then seaching with loops

      recipes[1] = {'id':1, "title": this.state.title, "ingredients":this.state.ingredients, "directions":this.state.directions};
      // Store in localStorage
      localStorage.setItem("recipes", JSON.stringify(recipes));

    } else if (this.state.recipeId){ //if edit recipe
      let recipes = {};
      recipes = this.state.recipes;
      recipes[this.state.recipeId] = {'id':this.state.recipeId, "title": this.state.title, "ingredients":this.state.ingredients, "directions":this.state.directions};
      // Store in localStorage
      localStorage.setItem("recipes", JSON.stringify(recipes));
    } else {
      let recipes = this.state.recipes;
      let newId;
      if(!Object.keys(recipes).length) {
        newId = 1;
      } else {
        let lastId = parseInt(this.state.recipes[Object.keys(this.state.recipes)[Object.keys(this.state.recipes).length - 1]].id, 10);
        newId = lastId + 1;
      }
      recipes[newId] = {'id':newId, "title": this.state.title, "ingredients":this.state.ingredients, "directions":this.state.directions};
      // Store in localStorage
      localStorage.setItem("recipes", JSON.stringify(recipes));
    }
    this.setState({
      title: "",
      ingredients: "",
      directions: "",
      recipeSaved: true
    });
  }

  render() {
    return (
      <div className="container add-recipe-page">
        <h3>Add Recipe</h3>
        <form onSubmit={this.onFormSubmit}>
          <div className="form-group">
            <label>Title</label>
              <input
                className="form-control"
                type="text"
                name="title"
                value={this.state.title}
                onChange={this.onInputChange}
              />
          </div>
          <div className="form-group">
            <label>Ingredients:</label>
            <textarea
              className="form-control"
              rows="2"
              type="text"
              name="ingredients"
              value={this.state.ingredients}
              onChange={this.onInputChange}
            />
          <small id="emailHelp" class="form-text text-muted">Separate your ingredients with a fullstop.</small>
          </div>
          <div className="form-group">
            <label> Directions:</label>
              <textarea
                className="form-control"
                rows="2"
                type="text"
                name="directions"
                value={this.state.directions}
                onChange={this.onInputChange}
              />
            <small id="emailHelp" class="form-text text-muted">Separate your directions with a fullstop.</small>
          </div>
          <input type="submit" value="Save Recipe" className="btn btn-primary"/>
          {
            this.state.recipeSaved &&
                <span>Recipe Saved.</span>
            }

        </form>
      </div>
    );
  }
}

export default AddRecipe;
