import React, {useState, useEffect} from 'react'
import InventoryCard from './InventoryCard'

function Snacks({pantry, deletePantryItem}) {
    const [snacks, setsnacks] = useState([])

    useEffect(()=>{
       let items= pantry.filter(item => item.category === 'snack')
       setsnacks(items)
    },[pantry])
  return (
    <div>
            {snacks.map(snack=><InventoryCard food={snack} deletePantryItem={deletePantryItem} key={snack.id}/>)}
    </div>
  )
}

export default Snacks