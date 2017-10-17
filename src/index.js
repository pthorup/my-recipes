import React from 'react';
import ReactDOM from 'react-dom';
import RecipeList from './components/recipe-list';
import Header from './components/header';
import AddRecipe from './components/add-recipe';
import ShowRecipe from './components/show-recipe';
import Footer from './components/footer';
import { BrowserRouter, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import './styles/main.css';


ReactDOM.render(
  <BrowserRouter>
    <div>
      <Header />
      <Route path="/my-recipes/" exact component={RecipeList} />
      <Route path="/my-recipes/add-recipe" component={AddRecipe} />
      <Route path="/my-recipes/edit-recipes/:id" component={AddRecipe} />
      <Route path="/my-recipes/recipes/:id" component={ShowRecipe} />
      <Footer />
  </div>
</BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
