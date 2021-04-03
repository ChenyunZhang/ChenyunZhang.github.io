import { Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, NavLink, Nav } from "reactstrap";
import React, { useState } from "react"


function App() {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);
  return (
    <>
      <Navbar dark color="info">
        <div className="container">
          <NavbarBrand>CHENYUN ZHANG</NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="">Resume</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">Projects</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </>
  );
}

export default App;
