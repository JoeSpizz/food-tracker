import React, {useState} from 'react'
import swal from 'sweetalert'

function CreateUser({handleClick}) {
    const [name, setName] = useState("")
    const [password, setPassword]= useState("")
    const [passConfirm, setPassConfirm] = useState("")
    function handleChange (e){
        setName(e.target.value)
    }
    function passChange (e){
        setPassword(e.target.value)
    }
    function passConfirmChange (e){
        setPassConfirm(e.target.value)
    }
        function handleSubmit(e){
            e.preventDefault()
            fetch("/signup", {
                method: "POST",
                headers:{
                    "Content-type" : "Application/json"
                },
                body: JSON.stringify({
                    username : name,
                    password : password,
                    password_confirmation : passConfirm
                }
                )})
                .then (r=>{
                    if (r.ok) {
                    r.json().then(data=>swal(data.username+ "created, please log in"))
                    }
                    else{
                        r.json().then(data=>alert(data.errors))
                    }
            })
            handleClick()}

  
      return (
        <div>
            <form onSubmit={handleSubmit}>
       <label for="createUser"><b>Username</b></label>
           <input type="text" placeholder='...' required onChange={handleChange}></input>
           <br></br><label for="pass"><b>Password? </b></label>
           <input type="password" placeholder='...' required onChange={passChange}></input>
           <br></br>
           <input type="password" placeholder='...' required onChange={passConfirmChange}></input>
           <br></br>
            <input type="submit" value="Create Profile"/>
     </form>
        </div>
      )
}

export default CreateUser