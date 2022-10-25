import React from 'react'
import NavBar from './NavBar'

function Welcome({setUser}) {
  return (
    <div>
       <NavBar setUser={setUser}/>
       <p>
         The future home of the Food Tracker <br></br> An app wherein you can easily review the food you currently have in your house. Check expiration dates, and decide if you have all the ingredients you need to make that meal you wanted. 
        </p>
    </div>
  )
}

export default Welcome