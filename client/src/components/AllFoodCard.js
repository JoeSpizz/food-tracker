import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form';

function AllFoodCard({food}) {
const [editExp, setEditExp] = useState(false)
const [exp, setExp] = useState("")
function expEdit(){
setEditExp(!editExp)
}
function expChange(e){
    setExp(e.target.value)
}

useEffect(()=> {
    let date = new Date();
    date.setDate(date.getDate() + food.ave_expiration_length);
    let day = date.getDate()
    let month = date.getMonth()
    let year = date.getFullYear()
    setExp(`${year}/${day}/${month}`)
}, [food])

function addFoodToPantry(e){
    e.preventDefault()
    let itemID = e.target.parentNode.firstChild.id
    fetch ('/pantryitems', {
        method: "POST",
        headers: {
            "Content-type" : "Application/json"
        },
        body: JSON.stringify({
            id: itemID,
            expiration: exp
        })
    })
    .then(r=>r.json())
    .then(alert(food.name + " added to pantry"))
}
  return (
    <div className='allFoodsCard' >
        <Card style={{ width: '13rem' }} bg="secondary">
      <Card.Img src={food.url} style={{ height: '10rem' }}/>
      <Card.Body>
        <Card.Title id={food.id}>{food.name}</Card.Title>
        {editExp ? <Card.Text> <Form>
            <Form.Control 
            type="date"
            placeholder="expiration"
            onChange={expChange}
            />
          <Button variant="success" onClick={expEdit}>Submit</Button></Form>
        </Card.Text> : <Card.Text>
          {exp}
          <Button style={{marginLeft : '15px'}} variant="danger" onClick={expEdit}>Edit</Button>
        </Card.Text> }
        <Button variant="success" style={{marginBottom : '-10px'}} onClick={addFoodToPantry}>Add to Pantry</Button> 
      </Card.Body>
    </Card>
    </div>
  )
}

export default AllFoodCard