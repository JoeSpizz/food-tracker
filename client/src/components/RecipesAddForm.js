import React, {useState } from 'react'
import {Form, Button, InputGroup} from 'react-bootstrap/'
import RecipeIngredientSearch from './RecipeIngredientSearch'

function RecipesAddForm({resetForm, foods, newRecipe}) {
const [recName, setRecName] = useState("")
const [recUrl, setRecUrl] = useState("")
const [ingredients, setIngredients] = useState([])
const [searched, setSearched] = useState([])
const [shownIngredients, setShownIngredients] = useState([])


    function createMeal(e){
        e.preventDefault()
        let recipe = {
            name : recName,
            url : recUrl,
            ingredients_attributes : ingredients}
        fetch('/recipes',{
            method: "POST",
            headers: {
                "Content-type" : "Application/json"
            },
            body: JSON.stringify(recipe)
        })
        .then(r=>r.json())
        .then(data=>newRecipe(data))

            resetForm()
      }


    function newRecName(e){
        setRecName(e.target.value)
    }
    function newRecUrl(e){
        setRecUrl(e.target.value)
    }

    function newIngredient(e){
        let value = e.target.value
        if (value === ""){
            setSearched("")
        }
        else {
        let searchedItem = foods.filter(food => food.name.toLowerCase().includes(value.toLowerCase()))
        if (searchedItem.length === 0 ){
        alert("No Food item matches what you've typed. Please check spelling. You may have to add this food to all foods if it doesn't exist already")}
        else{
        setSearched(searchedItem.map(food=> <RecipeIngredientSearch food={food} assignFood={assignFood}/>))}
        }
        }
    function assignFood(food, quantity){

        setIngredients([...ingredients, { food_id: food.id, quantity: quantity}])
        setSearched([])
        setShownIngredients([...shownIngredients, {name: food.name, quantity: quantity}])
    }



  return (
    <div className='recipeForm'>
          <Form onSubmit={createMeal} >
            <Form.Control
              type="text"
              placeholder="Recipe Name"
              className="recipeFormControl"
              onChange={newRecName}
            />
            <Form.Control
              type="url"
              placeholder="Link to Recipe Instructions"
              className="recipeFormControl"
              onChange={newRecUrl}
            />
            <InputGroup>
           <Form.Control
               type="search"
               placeholder="Add Ingredient"
               className="recipeFormControl"
               name="New Ingredient"
               onChange={newIngredient}
               autocomplete="off"
               />
              </InputGroup>
           {searched}
           <ul>{shownIngredients.map(ingredient=> <li>{ingredient.name + ", Quantity: " + ingredient.quantity}</li>)}</ul>
            <Button variant="success" type="submit">Create</Button>
        </Form>


    </div>
  )
}

export default RecipesAddForm