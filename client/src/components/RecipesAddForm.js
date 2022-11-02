import React, { useState } from 'react'
import {Form, Button} from 'react-bootstrap/'

function RecipesAddForm() {
const [ingNum, setIngNum] = useState([1])
const [recName, setRecName] = useState("")
const [recUrl, setRecUrl] = useState("")
const [ingredients, setIngredients] = useState({})

  
      function addIngredient(){
          let numup = ingNum.length + 1
          setIngNum([...ingNum, numup])
      }
      function removeIngredient(){
        setIngNum(ingNum.slice(1))
    }

    function createMeal(e){
        e.preventDefault()
        console.log({
            name : recName,
            url : recUrl,
            ingredients : ingredients

            
        })
      }
    function newRecName(e){
        setRecName(e.target.value)
    }
    function newRecUrl(e){
        setRecUrl(e.target.value)
    }
    function newIngredient(e, updatedAt){
        let name = e.target.name
        let value = e.target.value
        setIngredients({...ingredients, [name]: value})
        console.log(name, value)
    }


  return (
    <div>
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
           {ingNum.map(item=>{
               return <Form.Control
               type="text"
               placeholder={`Ingredient ${ingNum.indexOf(item) +1}`}
               className="recipeFormControl"
               name={`Ingedient${ingNum.indexOf(item) +1}`}
               key={ingNum.indexOf(item)}
               onChange={newIngredient}
               />

           })}
           
            <Button variant='warning' onClick={addIngredient}>Add Ingredient</Button>
            <Button variant='danger' onClick={removeIngredient}>Remove Ingredient</Button>
            <Button variant="success" type="submit">Create</Button>
        </Form>
    </div>
  )
}

export default RecipesAddForm