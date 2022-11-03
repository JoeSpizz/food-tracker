import React from 'react'
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';

function Welcome({setUser, user}) {
  return (
    <div className='welcome'>
       <h1> Welcome to your Pantry, {user}!</h1>
       <p className='appExplination'>
         To add new ingredients, spices, or premade meals to your pantry's inventory visit the {<LinkContainer to="/allFoods"><Button variant="outline-info"> All Foods </Button></LinkContainer>} page.
         Your {<LinkContainer to="/inventory"><Button variant="outline-info">Pantry</Button></LinkContainer>} will show you everything you own. If you want a more specific list
        you can review your {<LinkContainer to="/ingredients"><Button variant="outline-info"> ingredients </Button></LinkContainer>} and {<LinkContainer to="/spices"><Button variant="outline-info"> spices </Button></LinkContainer>}. Or check out your {<LinkContainer to="/recipes"><Button variant="outline-info"> recipe book </Button></LinkContainer>} for some extra inspiration and to ensure you have everything you need. If you don't have the time or energy to cook, just head over to your {<LinkContainer to="/meals"><Button variant="outline-info">premade meals </Button></LinkContainer>} or {<LinkContainer to="/snacks"><Button variant="outline-info">snacks </Button></LinkContainer>}and pick something to eat NOW!
         
        </p>


    </div>
  )
}

export default Welcome