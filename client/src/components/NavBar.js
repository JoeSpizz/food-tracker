import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {LinkContainer} from 'react-router-bootstrap'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

function NavBar({setUser}) {
    const [show, setShow] = useState(false);
    const navigate = useNavigate()
const showDropdown = (e)=>{
    setShow(!show);
}
const hideDropdown = e => {
    setShow(false);
}
    function logout(){
            fetch("/logout", { method: "DELETE" }).then((r) => {
              if (r.ok) {
                setUser(null);
                navigate("/")
              }
            });
    }
  return (
    <Navbar bg="info" expand="lg" className='navbar'>
        <Container fluid>
        <LinkContainer to="/">
        <Navbar.Brand >Food Tracker</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          <NavDropdown title="Pantry" id="navbarDropdown" show={show}
   onMouseEnter={showDropdown} 
   onMouseLeave={hideDropdown}
   >
       <LinkContainer to="/inventory"> 
          <NavDropdown.Item className="dropdownItem">Full Inventory</NavDropdown.Item> 
          </LinkContainer>
          <LinkContainer to="/ingredients"> 
          <NavDropdown.Item className="dropdownItem">Ingredients</NavDropdown.Item> 
          </LinkContainer>
          <LinkContainer to="/spices"> 
              <NavDropdown.Item >
                Spices
              </NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/snacks"> 
              <NavDropdown.Item >
                Snacks
              </NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />
              <LinkContainer to="/meals">
              <NavDropdown.Item>
                Premade Meals
              </NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            <LinkContainer to="/allFoods">
            <Nav.Link >All Foods</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/recipes">
            <Nav.Link >Meals/Recipes</Nav.Link>
            </LinkContainer>
          </Nav>
         
          <Button variant="danger" className='logoutBtn' onClick={logout}>Logout</Button>
        </Navbar.Collapse>

        </Container>
    </Navbar>
  );
}

export default NavBar;