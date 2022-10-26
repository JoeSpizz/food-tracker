import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import AllFoodCard from './AllFoodCard';

function AllFoods() {
    const [foods, setFoods] = useState([])
    const [display, setDisplay] = useState([])

    useEffect(()=>{
        fetch('/foods')
        .then(r=>r.json())
        .then(foods=>{
            setFoods(foods)
            setDisplay(foods)})
    }, [])

    function filter (e){
        let category = e.target.value
        if (category === "All Foods"){
            setDisplay(foods)
        }
        else {
       let displayedFoods= foods.filter(food => food.category === category)
        setDisplay(displayedFoods)
        }
    }

  return (
    <div>
       <h1>All Foods</h1>
       <div className="allSearch">
       <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search Pantry"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light">Search</Button>
          </Form>
          <h3> OR FILTER BY:</h3>
          <Form.Select aria-label="Default select example" onChange={filter}>
      <option>All Foods</option>
      <option value="ingredient">Ingredients</option>
      <option value="spice">Spices</option>
      <option value="premade">Pre-Made Meals</option>
      <option value="snack">Snacks</option>
    </Form.Select>
    </div>

    {display.map(food=> <AllFoodCard food={food} key={food.id}/>)}
  
    </div>
  )
}

export default AllFoods