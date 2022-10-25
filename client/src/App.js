import './index.css';
import Login from './components/Login';
import {useState, useEffect} from 'react'
import NavBar from './components/NavBar';
function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user.username));
      }
    });
  }, []);
  
  function login(data){
    setUser(data)
  }

  if (!user) return <Login login={login} />;

console.log(user)
  return (
    <div className="Body">
       <NavBar setUser={setUser}/>
        <p>
         The future home of the Food Tracker <br></br> An app wherein you can easily review the food you currently have in your house. Check expiration dates, and decide if you have all the ingredients you need to make that meal you wanted. 
        </p>
    </div>
  );
}

export default App;
