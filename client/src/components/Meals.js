import React, {useState, useEffect} from 'react'
import InventoryCard from './InventoryCard'


function Meals({pantry, deletePantryItem}) {
    const [meals, setmeals] = useState([])

    useEffect(()=>{
       let items= pantry.filter(item => item.category === 'premade')
       setmeals(items)
    },[pantry])
  return (
    <div>
       {meals.map(meal=><InventoryCard food={meal} deletePantryItem={deletePantryItem} key={meal.id}/>)}
    </div>
  )
}

export default Meals