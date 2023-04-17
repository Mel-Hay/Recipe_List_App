import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  function addRecipe(newRecipe) {
    setRecipes([
      ...recipes, newRecipe
    ]);
  }
  function deleteRecipe(indexToDelete){
    const newRecipes = recipes.filter((recipe, index) => index !== indexToDelete);
    setRecipes(newRecipes);
  }

  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} setRecipes={setRecipes} deleteRecipe={deleteRecipe} />
      <RecipeCreate addRecipe={addRecipe} />
    </div>
  );
}

export default App;
