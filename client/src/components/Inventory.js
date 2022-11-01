import React, {useEffect, useState} from 'react'
import Button from 'react-bootstrap/esm/Button'
import Form  from 'react-bootstrap/Form'
import Expiring from './Expiring'
import Ingredients from './Ingredients'
import Meals from './Meals'
import Snacks from './Snacks'
import Spices from './Spices'

function Inventory({pantry, deletePantryItem, user}) {
  const [searched, setSearch] = useState(undefined)
  const [value, setValue] = useState("")
  const [expiring, setExpiring] = useState([])

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
useEffect(()=>{
  let expConversion1 = pantry.map(food => food.pantryitems[0].expiration_date)
  let expConversion2 = expConversion1.map(item => new Date(item))
  let today = new Date()
  today.setDate(today.getDate()+30)
  let expConversion3 = expConversion2.filter(date => date.getTime() < today.getTime())
  let expDatesFilter = expConversion3.map(date => {
   let dateString = date.getFullYear() + '-'
    + ('0' + (date.getMonth()+1)).slice(-2) + '-'
    + ('0' + (date.getDate()+1)).slice(-2);
  return dateString
  })
  let expiringProduct = pantry.filter(item=> expDatesFilter.includes(item.pantryitems[0].expiration_date))
  // console.log(expiringProduct)
  setExpiring(expiringProduct)
}, [pantry])

  return (
    <div>
        <h1 id="pantryTitle">{user}'s Pantry</h1>
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
    <div >
        <h1 id="expireTitle"> EXPIRING:</h1>
        {expiring.map( product => <Expiring food={product} key={product.id}/> )}
    </div>
        <Ingredients pantry={pantry} deletePantryItem={deletePantryItem} searched={searched}/>
        <Spices pantry={pantry} deletePantryItem={deletePantryItem} searched={searched}/>
        <Snacks pantry={pantry} deletePantryItem={deletePantryItem} searched={searched}/>
        <Meals pantry={pantry} deletePantryItem={deletePantryItem} searched={searched}/>
    </div>
  )
}

export default Inventory