import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'


function InventoryCard({food}) {

console.log(food)
    function deleteFromPantry(){

    }
  return (
    <div className='pantryItemCard' >
    <Card style={{ width: '13rem' }} bg="secondary">
  <Card.Img src={food.url} style={{ height: '10rem' }}/>
  <Card.Body>
    <Card.Title id={food.id}>{food.name}</Card.Title>
 <Card.Text>
      "hmmm"
    </Card.Text>
    <Button variant="success" style={{marginBottom : '-10px'}} onClick={deleteFromPantry}>Remove</Button> 
  </Card.Body>
</Card>
</div>
  )
}

export default InventoryCard