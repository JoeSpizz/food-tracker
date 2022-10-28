import React, {useState, useEffect} from 'react'
import InventoryCard from './InventoryCard'


function Ingredients({pantry, deletePantryItem, searched}) {
    const [ingredients, setIngredients] = useState([])

    useEffect(()=>{
      if (searched === undefined){
       let items= pantry.filter(item => item.category === 'ingredient')
       setIngredients(items)
      }
      else{
        console.log("searching...")
    
        let items = pantry.filter(item => (item.name.toLowerCase().includes(searched.toLowerCase()) && item.category==='ingredient'))
        setIngredients(items)
      }


    },[pantry, searched])



  return (
    <div>
      <h2>Ingredients</h2>
        {ingredients.map(ingredient=><InventoryCard food={ingredient} deletePantryItem={deletePantryItem} key={ingredient.id}/>)}
    </div>
  )
}

export default Ingredients