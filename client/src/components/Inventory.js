import React from 'react'
import Ingredients from './Ingredients'
import Leftovers from './Leftovers'
import Meals from './Meals'
import Snacks from './Snacks'
import Spices from './Spices'

function Inventory({pantry, deletePantryItem}) {

  return (
    <div>
        <h1>Everything in your Pantry is here!</h1>
        <Ingredients pantry={pantry} deletePantryItem={deletePantryItem}/>
        <Spices pantry={pantry} deletePantryItem={deletePantryItem}/>
        <Snacks pantry={pantry} deletePantryItem={deletePantryItem}/>
        <Meals pantry={pantry} deletePantryItem={deletePantryItem}/>
        <Leftovers pantry={pantry} deletePantryItem={deletePantryItem}/>
    </div>
  )
}

export default Inventory