import React, { useState } from "react";

function RecipeCreate({addRecipe}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  let initialRecipeData = {
    name:'',
    cuisine:'',
    photo:'',
    ingredients:'',
    preparation:''
  }

  const [customRecipeData, setCustomRecipeData]= useState(initialRecipeData);

  function handleInput (event){
    setCustomRecipeData({
      ...customRecipeData,
      [event.target.name]: event.target.value
    })
  }

  function handleFormSubmit(event){
    event.preventDefault();
    addRecipe(customRecipeData)
    setCustomRecipeData({...initialRecipeData})
  }


  return (
    <form name="create" onSubmit={handleFormSubmit}>
      <table>
        <tbody >
          <tr >
            <td className="name">
              <input  value={customRecipeData.name} name="name" placeholder="Name" type="text" onChange={handleInput} />
              </td>
              <td className="cuisine">
              <input value={customRecipeData.cuisine} name="cuisine" placeholder="Cuisine" type="text" onChange={handleInput} />
              </td>
              <td className="photo">
              <input value={customRecipeData.photo} name="photo" placeholder="URL" type="text" onChange={handleInput} />
              </td>
              <td className="ingredients">
              <textarea  value={customRecipeData.ingredients} name="ingredients" placeholder="Ingredients" onChange={handleInput} />
              </td>
              <td className="preparations">
              <textarea  value={customRecipeData.preparation} name="preparation" placeholder="Preparation" onChange={handleInput} />
            </td>
            <td className="actions">
              <button  type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
