import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import RecipeCards from './RecipeCards'
import RecipesAddForm from './RecipesAddForm'


function Recipes({pantry}) {
const [form, setForm] = useState(false)
const [recipes, setRecipes] = useState([])
const [foods, setFoods] = useState([])

useEffect(()=>{
  fetch('/recipes')
  .then(r=>r.json())
  .then(data=>setRecipes(data))
}, [])

useEffect(()=>{
  fetch('/foods')
  .then(r=>r.json())
  .then(foods=>{
      setFoods(foods)
      })
}, [])
function showForm(){
  setForm(!form)
}
function resetForm(){
  setForm(!form)
}
function newRecipe(meal){
  setRecipes([...recipes, meal])
}
function recipeRemoval(data){
  console.log(data)
  let displayedRecipes = recipes.filter(item=> item.id!== data)
  console.log(displayedRecipes)
  setRecipes(displayedRecipes)
}
  return (
    <div className='pantrySection'>

      <h2> Home of Recipes</h2>
      <p> All recipes created by all users are available here. Any ingredients you already own in your pantry will show up green, any ingredients you need to acquire will show up white</p> 
      <div>{form? <RecipesAddForm resetForm={resetForm} foods={foods} newRecipe={newRecipe}/> : <Button variant='primary' onClick={showForm}>Create New Recipe</Button>}
      </div>
      {recipes.map(recipe=> <RecipeCards recipe={recipe} key={recipe.id} pantry={pantry} recipeRemoval={recipeRemoval}/>)}
       
    </div>
  )
}

export default Recipes