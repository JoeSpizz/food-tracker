import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import Form from 'react-bootstrap/Form';
import AllFoodCard from './AllFoodCard';
import swal from 'sweetalert';

function AllFoods({finalizeAdd, createNewFood}) {
    const [foods, setFoods] = useState([])
    const [display, setDisplay] = useState([])
    const [newFoodName, setNewFoodName] = useState([]),
    newName = ({target:{value}}) => setNewFoodName(value)
    const [newCategory, setNewCategory] = useState([]),
    onInput = ({target:{value}}) => setNewCategory(value)
    const [newImage, setNewImage] = useState([]),
    newImageURL = ({target:{value}}) => setNewImage(value)
    const [newExpiration, setNewExpiration] = useState([]),
    newExp = ({target:{value}}) => setNewExpiration(value)

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
    const popoverBottom = (
      <Popover id="popover-positioned-bottom" title="Popover bottom">
        <Form onSubmit={onFormSubmit} >
            <Form.Control
              type="text"
              placeholder="New Food Name"
              className="me-2"
              onChange={newName}
            />
            <Form.Control
              type="url"
              placeholder="New Food Image URL"
              className="me-2"
              onChange={newImageURL}
            />
             <Form.Control
              type="text"
              placeholder="Average Days to Expiration"
              className="me-2"
              onChange={newExp}
            />
             <Form.Select aria-label="Default select example" onChange={onInput}>
      <option value="ingredient">Ingredient</option>
      <option value="spice">Spice</option>
      <option value="snack">Snack</option>
      <option value="premade">Premade Meal</option>
    </Form.Select>
            
              <Button type="Submit">Create Food</Button>
           
          </Form>
      </Popover>
    );
    function onFormSubmit (e) {
      e.preventDefault()
      let newFood = {
        name : newFoodName,
        url : newImage,
        ave_expiration_length : newExpiration,
        category : newCategory 
      }
      fetch ('/foods', {
        method: "POST",
        headers: {"Content-type" : "Application/json"},
        body: JSON.stringify(newFood)
      })
      .then(r=>{
        if (r.ok) {r.json()
          .then(data=>{
                 let newFood = [...foods,data]
                 setFoods(newFood)
                 setDisplay(newFood)
         })}
        else{
            swal("All foods require a name, and a genre")
    }})
      swal(`Created ${newFoodName}, add another?`)
      e.target.reset()
      }

function deleteFromAll(id){
  console.log("delete run")
  let newFoods = foods.filter(item => item.id !== id)
  setFoods(newFoods)
  setDisplay(newFoods)
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
    <div className='addnewCategory'>
      <br></br>
      <OverlayTrigger trigger="click" placement="bottom" overlay={popoverBottom}>
        <Button> New Food</Button>
      </OverlayTrigger>
    </div>
    <br></br>
    {display.map(food=> <AllFoodCard food={food} key={food.id} finalizeAdd={finalizeAdd} deleteFromAll={deleteFromAll}/>)}
  
    </div>
  )
}

export default AllFoods