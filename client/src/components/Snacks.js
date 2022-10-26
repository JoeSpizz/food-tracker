import React, {useState, useEffect} from 'react'
import InventoryCard from './InventoryCard'

function Snacks({pantry}) {
    const [snacks, setsnacks] = useState([])

    useEffect(()=>{
       let items= pantry.filter(item => item.category === 'snack')
       setsnacks(items)
    },[pantry])
  return (
    <div>
            {snacks.map(snack=><InventoryCard food={snack}/>)}
    </div>
  )
}

export default Snacks