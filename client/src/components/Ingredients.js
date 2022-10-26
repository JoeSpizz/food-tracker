import React, {useState, useEffect} from 'react'
import InventoryCard from './InventoryCard'


function Ingredients({pantry}) {
    const [ingredients, setIngredients] = useState([])

    useEffect(()=>{
       let items= pantry.filter(item => item.category === 'ingredient')
       setIngredients(items)
    },[pantry])
console.log(ingredients)
  return (
    <div>
        {ingredients.map(ingredient=><InventoryCard food={ingredient}/>)}
    </div>
  )
}

export default Ingredients