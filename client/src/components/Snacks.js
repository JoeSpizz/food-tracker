import React, {useState, useEffect} from 'react'
import InventoryCard from './InventoryCard'

function Snacks({pantry, deletePantryItem, searched}) {
    const [snacks, setsnacks] = useState([])

    useEffect(()=>{
      if (searched === undefined){
       let items= pantry.filter(item => item.category === 'snack')
       setsnacks(items)
      }
      else{
        let items = pantry.filter(item => (item.name.toLowerCase().includes(searched.toLowerCase()) && item.category==='snack'))
        setsnacks(items)
      }},[pantry, searched])



  return (
    <div>
      <h2> Snacks</h2>
            {snacks.map(snack=><InventoryCard food={snack} deletePantryItem={deletePantryItem} key={snack.id}/>)}
    </div>
  )
}

export default Snacks