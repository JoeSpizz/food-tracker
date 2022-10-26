import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import AllFoodCard from './AllFoodCard';

function AllFoods() {

// fetch get from '/allfoods' 

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
          <Form.Select aria-label="Default select example">
      <option>Food Types</option>
      <option value="ingredients">Ingredients</option>
      <option value="spices">Spices</option>
      <option value="premade">Pre-Made</option>
    </Form.Select>
    </div>
       
    <AllFoodCard/>
    </div>
  )
}

export default AllFoods