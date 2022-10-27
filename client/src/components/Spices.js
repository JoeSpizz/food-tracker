import React, { useEffect, useState } from 'react'
import InventoryCard from './InventoryCard'


function Spices({pantry, deletePantryItem}) {
  const [spices, setspices] = useState([])

  useEffect(()=>{
     let items= pantry.filter(item => item.category === 'spice')
     setspices(items)
  },[pantry])
return (
  <div>
          {spices.map(spice=><InventoryCard food={spice} deletePantryItem={deletePantryItem} key={spice.id}/>)}
  </div>
)
}

export default Spices