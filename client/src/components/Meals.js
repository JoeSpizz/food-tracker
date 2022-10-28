import React, {useState, useEffect} from 'react'
import InventoryCard from './InventoryCard'


function Meals({pantry, deletePantryItem, searched}) {
    const [meals, setmeals] = useState([])

    useEffect(()=>{
      if (searched === undefined){
       let items= pantry.filter(item => item.category === 'premade')
       setmeals(items)
      }
      else{
        let items = pantry.filter(item => (item.name.toLowerCase().includes(searched.toLowerCase()) && item.category==='meal'))
        setmeals(items)
      }
    },[pantry, searched])


  return (
    <div>
      <h2> Meals</h2>
       {meals.map(meal=><InventoryCard food={meal} deletePantryItem={deletePantryItem} key={meal.id}/>)}
    </div>
  )
}

export default Meals