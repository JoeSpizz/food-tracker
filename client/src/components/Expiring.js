import React from 'react'
import Card from 'react-bootstrap/Card'

function Expiring({food}) {
  return (
    <div  className='expiring' >
        <Card body bg="danger">{food.name} expires {food.pantryitems[0].expiration_date.slice(-5)}</Card>
    </div>
  )
}

export default Expiring