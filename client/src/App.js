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
import NavBar from './components/NavBar';
import Inventory from './components/Inventory';
import Snacks from './components/Snacks';
import Recipes from './components/Recipes';

function App() {
  const [user, setUser] = useState(null);
  const [pantry, setPantry] = useState([])
  
  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user.username)
          fetch('/pantryitems').then((r)=>{
            if (r.ok){
              r.json().then(data=>setPantry(data))
            }
          })
        });
      }
    });
  }, []);


  function login(data){
    setUser(data)
    fetch('/pantryitems').then((r)=>{
      if (r.ok){
        r.json().then(data=>setPantry(data))
      }
    })
  }
  function finalizeAdd(data, food){
    let test = pantry.filter(item => item.name === food.name)
    
    if (test.length === 0){
      let newItem = food
      newItem.pantryitems.push(data)
      let newPantry = pantry
      newPantry.push(food)
      setPantry(newPantry)
    }
    else {
      fetch('/pantryitems')
    .then(r=>r.json())
    .then(data=> setPantry(data))
    }}
// console.log(pantry)
  function deletePantryItem (id){
    let newPantry = pantry.filter(item => item.id !== id)
    setPantry(newPantry)
  }


  if (!user) return <Login login={login} />;
  return (
    <div className="Body">
      
      <BrowserRouter>
      <NavBar setUser={setUser}/>
      <Routes>
        <Route exact path="/" element={<Welcome user={user}/>} />
        <Route exact path="/inventory" element={<Inventory pantry={pantry} deletePantryItem={deletePantryItem} user={user}/>}  />
        <Route exact path="/allFoods" element={<AllFoods finalizeAdd={finalizeAdd}/>}  />
        <Route exact path="/ingredients" element={<Ingredients pantry={pantry} deletePantryItem={deletePantryItem} />} />
        <Route exact path="/spices" element={<Spices pantry={pantry} deletePantryItem={deletePantryItem}/>} />
        <Route exact path="/snacks" element={<Snacks pantry={pantry} deletePantryItem={deletePantryItem}/>} />
        <Route exact path="/meals" element={<Meals pantry={pantry} deletePantryItem={deletePantryItem}/>} />
        <Route exact path="/recipes" element={<Recipes pantry={pantry}/>} />
       </Routes>  
       </BrowserRouter>
    </div>
  );
}

export default App;
