import React, {useState, useEffect} from 'react'
import InventoryCard from './InventoryCard'


function Ingredients({pantry, deletePantryItem}) {
    const [ingredients, setIngredients] = useState([])

    useEffect(()=>{
       let items= pantry.filter(item => item.category === 'ingredient')
       setIngredients(items)
    },[pantry])
  return (
    <div>
        {ingredients.map(ingredient=><InventoryCard food={ingredient} deletePantryItem={deletePantryItem} key={ingredient.id}/>)}
    </div>
  )
}

export default Ingredients