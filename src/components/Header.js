import {Nav,Navbar} from "react-bootstrap";

const Header = () => {      
  return (
      <Navbar bg='dark' variant='dark' expand='sm' collapseOnSelect> 
      <div className="container">
      <Navbar.Brand>
            Mukesh
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
        <Nav className="ms-auto">
            <Nav.Link href="#about">ABOUT</Nav.Link>
            <Nav.Link >WORK</Nav.Link>
            <Nav.Link >CONTACT</Nav.Link>
            <Nav.Link >SOCIAL</Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </div>  
      </Navbar>
  );
};

export default Header;
