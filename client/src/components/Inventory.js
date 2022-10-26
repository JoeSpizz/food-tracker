import React, {useState, useEffect} from 'react'
import Ingredients from './Ingredients'
import Leftovers from './Leftovers'
import Meals from './Meals'
import Snacks from './Snacks'
import Spices from './Spices'

function Inventory({pantry}) {

  return (
    <div>
        <h1>Everything in your Pantry is here!</h1>
        <Ingredients pantry={pantry}/>
        <Spices pantry={pantry}/>
        <Snacks pantry={pantry}/>
        <Meals pantry={pantry}/>
        <Leftovers pantry={pantry}/>
    </div>
  )
}

export default Inventory