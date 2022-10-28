import React, {useState, useEffect} from 'react'
import Form from 'react-bootstrap/Form';
import AllFoodCard from './AllFoodCard';

function AllFoods({finalizeAdd}) {
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

    function search(e){
      let item = e.target.value
      let searchedItem = foods.filter(food => food.name.toLowerCase().includes(item.toLowerCase()) )
      setDisplay(searchedItem)
    }

  return (
    <div>
       <h1>All Foods</h1>
       <div className="allSearch">
       <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search All Foods"
              className="me-2"
              aria-label="Search"
              onChange={search}
            />
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

    {display.map(food=> <AllFoodCard food={food} key={food.id} finalizeAdd={finalizeAdd}/>)}
  
    </div>
  )
}

export default AllFoods