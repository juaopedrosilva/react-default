import React, { Fragment } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav, 
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem ,NavItem, NavLink ,  Breadcrumb, BreadcrumbItem 
} from 'reactstrap'
import { Link } from 'react-router-dom'
import Logo from './www.ico'

export default class Menu extends React.Component {
    state = {  isOpen: false }
    toggle = () => {
        this.setState({
        isOpen: !this.state.isOpen
        });
    }
  render() {
    return <Fragment> 
        <Navbar color="light" light expand="md"> 
          <NavbarBrand href="/">
            <img src={Logo} width="40" height="40" class="d-inline-block align-top" alt="Logo" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/admin"><NavLink >Dashboard</NavLink></Link>
              </NavItem>
               <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Relatorio 
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <Link to="/admin/relatorio">Participantes</Link>
                  </DropdownItem>
                  {/* <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem> */}
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </Fragment> 
  }
}