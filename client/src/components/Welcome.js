import React from 'react'
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';

function Welcome({setUser, user}) {
  return (
    <div className='welcome'>
       <h1> Welcome to your Pantry, {user}!</h1>
       <p className='appExplination'>
         To add new ingredients, spices, or premade meals to your pantry's inventory visit the {<LinkContainer to="/allFoods"><Button variant="outline-info"> All Foods </Button></LinkContainer>} page.
         When you are ready to make some food you can review your {<LinkContainer to="/ingredients"><Button variant="outline-info"> ingredients </Button></LinkContainer>} and {<LinkContainer to="/spices"><Button variant="outline-info"> spices </Button></LinkContainer>} or check out your recipe book of {<LinkContainer to="/meals"><Button variant="outline-info"> meals </Button></LinkContainer>} to ensure you have everything you need. If you don't have the time or energy to cook, just head over to your {<LinkContainer to="/meals"><Button variant="outline-info">premade meals </Button></LinkContainer>} and pick something to eat NOW!
         <br></br>
         The search bar located on the top right of this page will search only your pantry.
        </p>


    </div>
  )
}

export default Welcome