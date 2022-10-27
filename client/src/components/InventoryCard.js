import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'


function InventoryCard({food}) {

let quantity = food.pantryitems.length
    function deleteFromPantry(){
      console.log(food.id)
        fetch(`/pantryitems/${food.id}`, 
        { method: "DELETE" }).then((r) => {
            if (r.ok) {
             quantity -= 1
            }
          });
    }
  return (
    <div className='pantryItemCard' >
    <Card style={{ width: '13rem' }} bg="secondary">
  <Card.Img src={food.url} style={{ height: '10rem' }}/>
  <Card.Body>
    <Card.Title id={food.id}>{food.name}</Card.Title>
 <Card.Text>
      {"Expires: " + food.pantryitems[0].expiration_date}
    </Card.Text>
    <Card.Text>
      {"Quantity: " + quantity}
    </Card.Text>
    <Button variant="success" style={{marginBottom : '-10px'}} onClick={deleteFromPantry}>Remove</Button> 
  </Card.Body>
</Card>
</div>
  )
}

export default InventoryCard