import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import swal from 'sweetalert'


function InventoryCard({food, deletePantryItem}) {
  const [quantity, setQuantity] = useState(food.pantryitems[0].quantity)
  const [editExp, setEditExp] = useState(false)
  const [exp, setExp] = useState(food.pantryitems[0].expiration_date)
function expEdit(){

  fetch(`/pantryitems/${food.id}`,{
    method: "PATCH",
     headers: {
    "Content-Type" : "Application/json"
    },
    body: JSON.stringify({
    expiration_date: exp
   })
    })
  .then(r=>r.json())
  .then(data=>setExp(data.expiration_date))
  setEditExp(!editExp)
  }

function expChange(e){
    setExp(e.target.value)
  }

  function showEdit(){
    setEditExp(!editExp)
  }


function deleteFromPantry(){
    swal("Remove item from Pantry/Reduce Quantity by 1?", {
      buttons: {
        cancel: "Nevermind!",
        catch: {
          text: "Delete",
          value: "catch",
        }
      },
    })
    .then((value) => {
      switch (value) {
        case "catch":
          fetch(`/pantryitems/${food.id}`, 
          { method: "DELETE" }).then((r) => {
              if (r.ok) {
                if (quantity > 1){
                  setQuantity(quantity-1)
                }
                else
               deletePantryItem(food.id)
              }
            });
          swal("Removed");
          break;
     
        default:
          swal("Nothing happened.");
      }
    });
       
    }

  return (
    <div className='pantryItemCard' >
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
      {"Expires: " + exp}
          <Button style={{marginLeft : '15px'}} variant="danger" onClick={showEdit}>Edit</Button>
        </Card.Text> }
    <Card.Text>
      {"Quantity: " + quantity}
    </Card.Text>
    <Button variant="danger" style={{marginBottom : '-10px'}} onClick={deleteFromPantry}>Remove</Button> 
  </Card.Body>
</Card>
</div>
  )
}

export default InventoryCard