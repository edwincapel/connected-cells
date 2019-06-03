import React, { useState } from 'react'
import {
  Collapse,
  Navbar as BootstrapNavbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'

export default function Navbar(){
  const [collapsed, setCollapsed] = useState(false)

  return (
    <BootstrapNavbar color="light" light expand="md">
      <NavbarBrand href="https://edwincapel.github.io/connected-cells/">Connected Cells</NavbarBrand>
      <NavbarToggler onClick={() => setCollapsed(!collapsed)} />
      <Collapse isOpen={collapsed} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="https://www.linkedin.com/in/edwin-capel-5b055793/">LinkedIn</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/edwincapel">GitHub</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://medium.com/@edwinrc1026/python-news-scraper-with-react-part-1-971e1ed2fb7">Medium</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://www.reddit.com/r/FortniteBattleRoyale/comments/aklpjw/made_a_script_that_compiles_top_10_fortnite/">Reddit</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </BootstrapNavbar>
  )
}