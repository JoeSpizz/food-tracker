import React, {useState, useEffect} from 'react'
import InventoryCard from './InventoryCard'


function Leftovers({pantry, deletePantryItem, searched}) {
    const [leftovers, setleftovers] = useState([])

    useEffect(()=>{
      if (searched === undefined){
       let items= pantry.filter(item => item.category === 'leftover')
       setleftovers(items)
      }
      else{
        let items = pantry.filter(item => (item.name.toLowerCase().includes(searched.toLowerCase()) && item.category==='leftover'))
        setleftovers(items)
      }},[pantry, searched])


  return (
    <div>
      <h2> Leftovers</h2>
       {leftovers.map(leftover=><InventoryCard food={leftover} deletePantryItem={deletePantryItem} key={leftover.id}/>)}
    </div>
  )
}

export default Leftovers