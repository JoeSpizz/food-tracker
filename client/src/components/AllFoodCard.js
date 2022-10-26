import React, {useState} from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form';

function AllFoodCard() {
const [editExp, setEditExp] = useState(false)
const [exp, setExp] = useState("11/13/2022")
function expEdit(){
setEditExp(!editExp)
}
function expChange(e){
    setExp(e.target.value)
}


  return (
    <div>
        <Card style={{ width: '15rem' }} bg="secondary">
      <Card.Img src="https://i5.walmartimages.com/asr/3592de4c-2d2d-4285-afbf-f0508775bd58_2.bb23225176016b4d5ce96c4efed80382.jpeg" />
      <Card.Body>
        <Card.Title>Name of Food</Card.Title>
        {editExp ? <Card.Text> <Form>
            <Form.Control 
            type="date"
            placeholder="expiration"
            onChange={expChange}
            />
          <Button variant="success" onClick={expEdit}>Submit</Button></Form>
        </Card.Text> : <Card.Text>
          {exp}
          <Button variant="danger" onClick={expEdit}>Edit</Button>
        </Card.Text> }
        <Button variant="success">Add to Pantry</Button> 
      </Card.Body>
    </Card>
    </div>
  )
}

export default AllFoodCard