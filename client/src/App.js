import logo from './logo.svg';
import './index.css';
import Login from './components/Login';

function App() {



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         The future home of the Food Tracker <br></br> An app wherein you can easily review the food you currently have in your house. Check expiration dates, and decide if you have all the ingredients you need to make that meal you wanted. 
        </p>
      </header>
      <Login/>
    </div>
  );
}

export default App;
