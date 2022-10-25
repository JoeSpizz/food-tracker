import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

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
        <Navbar.Brand href="#">Food Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          <NavDropdown title="Pantry" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Ingredients</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Spices
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Premade Meals
              </NavDropdown.Item>
              <NavDropdown.Item href="#action6">
                Leftovers
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action1">All Foods</Nav.Link>
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