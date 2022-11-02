import React from 'react'
import RecipesAddForm from './RecipesAddForm'


function Recipes() {


  return (
    <div className='pantrySection'>
      <h2> Home of Recipes</h2>
      <p> All recipes created by all users are available here. Any ingredients you already own in your pantry will show up green, any ingredients you need to acquire will show up red</p> 
      <RecipesAddForm/> 
      
       
    </div>
  )
}

export default Recipes