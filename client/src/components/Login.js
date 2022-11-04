import React, {useState} from 'react'
import CreateUser from './CreateUser'

function Login({login}) {
    const [userForm, setUserForm] = useState(false)
    const [visibilityState, setvisibilityState] = useState("visible")
    const [name, setName] = useState ("")
    const [password, setPassword] = useState("")
   
    function handleClick(){
        setUserForm(!userForm)
        if (visibilityState ==="visible"){
            setvisibilityState("hidden")
        }
        else {
            setvisibilityState("visible")
        } }
    function changeName(e){
        setName(e.target.value)
    }
    function changePass(e){
        setPassword(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault()
        fetch('/login', {
            method: "POST",
            headers: {"Content-type" : "Application/json"},
            body: JSON.stringify({
                username : name, 
                password : password}
            )
        })
        .then (r=>{
            if (r.ok) {
            r.json().then(data=>login(data.username))
            }
            else{
                r.json().then(data=>alert(data.errors))
            }})}
     
  return (
    <div id={"loginPage"}>
        <h1 > Your Pantry</h1>
        <p> An app to help you track all the food in your house. From expiration warnings to recipe lists this app is designed to be the only thing you need when planning meals or grocery runs.</p>
        <form  style={{visibility: visibilityState}} onSubmit={handleSubmit}>
   <label for="uname"><b>Username: </b></label>
       <input type="text" placeholder='Name' required onChange={changeName} name="name" className='userLogin'></input>
       <br></br>
       <label for="pass"><b>Password: </b></label>
       <input type="password" placeholder='Enter Password' required name="password" onChange={changePass} className='userLogin'></input>
       <br></br>
        <input type="submit" value="Login" />
 </form>
<br></br>
 <div id="createUser">
        <button value="Create User" onClick={handleClick} className="userButton">{userForm? "Login" : "Create User"}</button>
        {userForm ? <CreateUser handleClick={handleClick}/>: null}
    </div>
    </div>
  )
}

export default Login