import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import RecipesAddForm from './RecipesAddForm'


function Recipes() {
const [form, setForm] = useState(false)
function showForm(){
  setForm(!form)
}
function resetForm(){
  setForm(!form)
}

  return (
    <div className='pantrySection'>
      <h2> Home of Recipes</h2>
      <p> All recipes created by all users are available here. Any ingredients you already own in your pantry will show up green, any ingredients you need to acquire will show up red</p> 
      {form? <RecipesAddForm resetForm={resetForm}/> : <Button variant='warning' onClick={showForm}>Create New Recipe</Button>}
      
       
    </div>
  )
}

export default Recipes