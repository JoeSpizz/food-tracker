import React, { useState } from 'react'
import { Button, Card, Form, ListGroup, Table } from 'react-bootstrap'

function RecipeCards({recipe, pantry}) {
const [show, setShow] = useState(false)
const [recipeUrl, setRecipeUrl] = useState("")
function showRecipe(){
    setShow(!show)
}
let pantryFilter = pantry.map(item=> item.name)
  let recipeFilter = recipe.foods.map(item=> item.name)
  let ingredientsOwned = recipeFilter.filter(item=> pantryFilter.includes(item))
  console.log(recipe)

  function newUrl(e){
      e.preventDefault()
      let url = e.target.firstChild.value
      console.log(url)
      fetch(`/recipes/${recipe.id}`,{
          method: "PATCH",
          headers: {
              "Content-type": "Application/json"
          },
          body: JSON.stringify({
              url: url
          })
        })
        .then(r=>r.json())
        .then(data=> setRecipeUrl(data.url))
  }

  return (
    <div className='recipeCard'>
        <Card bg="secondary" text="light">
            <Card.Body >
                <Card.Title id="recipeTitle">
                    {recipe.name}
                </Card.Title >
                <Button variant='success' onClick={showRecipe}>Recipe Details</Button>
            { show ? <ListGroup>
               <Table className='recipeTable'>
                   <tbody >
                  {recipe.foods.map(item=>{
                  if (ingredientsOwned.includes(item.name)){
                    return <tr className="testGood"><td key={item.id}>{item.name}</td></tr>
                  }
                  else {
                  return <tr className="testBad"><td key={item.id}>{item.name}</td></tr>}})}
                  </tbody>
                  <tbody className="test2">
               {recipe.recipefoods.map(item=><tr><td key={item.id}>{item.quantity}</td></tr>)}
               </tbody>
               </Table>

               {recipeUrl === "" ? 
                    <Form onSubmit={newUrl}>
                        <Form.Control
                         type="url"
                         placeholder='Add Recipe Url'
                        />
                        <Button type="submit" variant='success'>Submit</Button>
                    </Form>
               :
               <Card.Link 
               className='link' 
               href={recipeUrl} 
               target="_blank" rel="norefferer"
               >
                   Full Recipe
                </Card.Link>
                }
               </ListGroup>: null
            }
              
               
            </Card.Body>
        </Card>
        </div>
  )
}

export default RecipeCards