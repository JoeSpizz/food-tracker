import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

function RecipeIngredientSearch({food, assignFood}) {
    const[quantity, setQuantity] = useState("")
    function select(e){
        e.preventDefault()
        assignFood(food, quantity)
    }
    function createQuantity(e){
        e.preventDefault()
        setQuantity(e.target.value)
    }
  return (
    <div className='ingredientSearch'>{food.name} 
    <Form >
        <Form.Control 
        type="text"
        aria-label="Ingredient Quantity"
        className='ingredientQuantity'
        placeholder='Quantity'
        onChange={createQuantity}
        />
    <Button variant="info" onClick={select}>Select</Button>
    </Form>
    </div>
  )
}

export default RecipeIngredientSearch