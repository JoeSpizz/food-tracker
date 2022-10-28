import React, { useEffect, useState } from 'react'
import InventoryCard from './InventoryCard'


function Spices({pantry, deletePantryItem, searched}) {
  const [spices, setspices] = useState([])

  useEffect(()=>{
    if (searched === undefined){
     let items= pantry.filter(item => item.category === 'spice')
     setspices(items)
    }
    else{
      let items = pantry.filter(item => (item.name.toLowerCase().includes(searched.toLowerCase()) && item.category==='spice'))
      setspices(items)
    }},[pantry, searched])

return (
  <div>
    <h2> Spices</h2>
          {spices.map(spice=><InventoryCard food={spice} deletePantryItem={deletePantryItem} key={spice.id}/>)}
  </div>
)
}

export default Spices