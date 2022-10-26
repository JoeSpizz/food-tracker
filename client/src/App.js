import './index.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Login from './components/Login';
import {useState, useEffect} from 'react'
import Welcome from './components/Welcome';
import AllFoods from './components/AllFoods';
import Ingredients from './components/Ingredients';
import Spices from './components/Spices';
import Meals from './components/Meals';
import Leftovers from './components/Leftovers';
import NavBar from './components/NavBar';
import Inventory from './components/Inventory';
import Snacks from './components/Snacks';
function App() {
  const [user, setUser] = useState(null);
  const [pantry, setPantry] = useState([])

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user.username));
      }
    });
  }, []);

useEffect(()=>{
    fetch('pantryitems')
    .then(r=>r.json())
    .then(data=> setPantry(data))
}, [])
  
  function login(data){
    setUser(data)
  }

  if (!user) return <Login login={login} />;
  return (
    <div className="Body">
      
      <BrowserRouter>
      <NavBar setUser={setUser}/>
      <Routes>
        <Route exact path="/" element={<Welcome user={user}/>} />
        <Route exact path="/inventory" element={<Inventory pantry={pantry}/>}  />
        <Route exact path="/allFoods" element={<AllFoods/>}  />
        <Route exact path="/ingredients" element={<Ingredients pantry={pantry}/>} />
        <Route exact path="/spices" element={<Spices pantry={pantry}/>} />
        <Route exact path="/snacks" element={<Snacks pantry={pantry}/>} />
        <Route exact path="/meals" element={<Meals pantry={pantry}/>} />
        <Route exact path="/leftovers" element={<Leftovers pantry={pantry}/>} />
       </Routes>  
       </BrowserRouter>
    </div>
  );
}

export default App;
