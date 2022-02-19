import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from "../components/App"
import Home from "../components/Home";
import RecipeDetails from "../components/RecipeDetails";

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route index element={<Home />} />
          <Route path="recipe-details/:recipeId" element={<RecipeDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
    ,document.body.appendChild(document.createElement('div')),
  )
})
