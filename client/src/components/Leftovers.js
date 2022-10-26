import React, {useState, useEffect} from 'react'
import InventoryCard from './InventoryCard'


function Leftovers({pantry}) {
    const [leftovers, setleftovers] = useState([])

    useEffect(()=>{
       let items= pantry.filter(item => item.category === 'leftover')
       setleftovers(items)
    },[pantry])
  return (
    <div>
       {leftovers.map(leftover=><InventoryCard food={leftover}/>)}
    </div>
  )
}

export default Leftovers