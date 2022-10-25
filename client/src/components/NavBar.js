import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {LinkContainer} from 'react-router-bootstrap'

function NavBar({setUser}) {
    function logout(){
            fetch("/logout", { method: "DELETE" }).then((r) => {
              if (r.ok) {
                setUser(null);
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
          <NavDropdown title="Pantry" id="navbarScrollingDropdown">
          <LinkContainer to="/ingredients"> 
          <NavDropdown.Item>Ingredients</NavDropdown.Item> 
          </LinkContainer>
          <LinkContainer to="/spices"> 
              <NavDropdown.Item >
                Spices
              </NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />
              <LinkContainer to="/meals">
              <NavDropdown.Item>
                Premade Meals
              </NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/leftovers">
              <NavDropdown.Item>
                Leftovers
              </NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            <LinkContainer to="/allFoods">
            <Nav.Link >All Foods</Nav.Link>
            </LinkContainer>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-dark">Search</Button>
          </Form>
          <Button variant="danger" className='logoutBtn' onClick={logout}>Logout</Button>
        </Navbar.Collapse>

        </Container>
    </Navbar>
  );
}

export default NavBar;