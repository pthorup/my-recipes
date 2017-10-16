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
      <Route path="/" exact component={RecipeList} />
      <Route path="/add-recipe" component={AddRecipe} />
      <Route path="/edit-recipes/:id" component={AddRecipe} />
      <Route path="/recipes/:id" component={ShowRecipe} />
      <Footer />
  </div>
</BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
