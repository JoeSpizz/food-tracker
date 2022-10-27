import React, {useState, useEffect} from 'react'
import InventoryCard from './InventoryCard'


function Leftovers({pantry, deletePantryItem}) {
    const [leftovers, setleftovers] = useState([])

    useEffect(()=>{
       let items= pantry.filter(item => item.category === 'leftover')
       setleftovers(items)
    },[pantry])
  return (
    <div>
       {leftovers.map(leftover=><InventoryCard food={leftover} deletePantryItem={deletePantryItem} key={leftover.id}/>)}
    </div>
  )
}

export default Leftovers