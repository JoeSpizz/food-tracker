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
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Welcome setUser={setUser}/>} />
        <Route exact path="/allFoods" element={<AllFoods/>}  />
        <Route exact path="/ingredients" element={<Ingredients/>} />
        <Route exact path="/spices" element={<Spices/>} />
        <Route exact path="/meals" element={<Meals/>} />
        <Route exact path="/leftovers" element={<Leftovers/>} />
       </Routes>  
       </BrowserRouter>
    </div>
  );
}

export default App;
