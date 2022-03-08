import { Nav,Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => { 
  const headerContents = ['HOME', 'WORK', 'CONTACT', 'SOCIAL']     
  return (
      <Navbar bg='dark' variant='dark' expand='sm' collapseOnSelect> 
      <div className="container">
      <Navbar.Brand>
            Mukesh
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
        <Nav className="ms-auto">
          {
            headerContents.map((arrItem, ind)=>{
              return (
                <NavLink key={ind} to={arrItem === 'HOME' ? '/' : `/${arrItem}`} 
                className={(navData)=> navData.isActive ? 'nav-link active ' : 'nav-link'} 
                >{arrItem}</NavLink>
              )
            })
          }
        </Nav>
        </Navbar.Collapse>
      </div>  
      </Navbar>
  );
};

export default Header;
