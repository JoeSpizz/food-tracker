import React, {useState} from 'react'
import Button from 'react-bootstrap/esm/Button'
import Form  from 'react-bootstrap/Form'
import Ingredients from './Ingredients'
import Leftovers from './Leftovers'
import Meals from './Meals'
import Snacks from './Snacks'
import Spices from './Spices'

function Inventory({pantry, deletePantryItem}) {
  const [searched, setSearch] = useState(undefined)
  const [value, setValue] = useState("")
  function search (e){
    e.preventDefault()
    let item = e.target.parentNode.firstChild.value
    setSearch(item)
  }
  function submit(e){
    e.preventDefault()
    let search = e.target.firstChild.value
    setSearch(search)
   setValue("")
  }
 function refresh(){
 let refresh= undefined
  setSearch(refresh)
  setValue("")
 }
 function typing(e){
   setValue(e.target.value)
 }
  return (
    <div>
        <h1>Everything in your Pantry is here!</h1>
        <Form className="pantrySearch" onSubmit={submit}>
          
            <Form.Control
              type="search"
              placeholder="Search Pantry"
              className="me-2"
              aria-label="Search"
              value={value}
              onChange={typing}
            />
            <Button variant="success"><span class="reload" onClick={refresh}>&#x21bb;</span></Button>
            <Button variant="info"   onClick={search}>Search</Button>
            

          </Form>
        <Ingredients pantry={pantry} deletePantryItem={deletePantryItem} searched={searched}/>
        <Spices pantry={pantry} deletePantryItem={deletePantryItem} searched={searched}/>
        <Snacks pantry={pantry} deletePantryItem={deletePantryItem} searched={searched}/>
        <Meals pantry={pantry} deletePantryItem={deletePantryItem} searched={searched}/>
        <Leftovers pantry={pantry} deletePantryItem={deletePantryItem} searched={searched}/>
    </div>
  )
}

export default Inventory