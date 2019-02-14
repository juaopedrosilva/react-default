import React, { Fragment } from 'react';
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav, 
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem ,NavItem, NavLink ,  Breadcrumb, BreadcrumbItem 
// } from 'reactstrap'
import { Link } from 'react-router-dom'
import Logo from './www.ico'
import './style.css'
import LOGO from './www.ico'
const menuToggle = () => {
  document.getElementById("wrapper").classList.toggle("toggled")
}
const logout = () => {
  localStorage.removeItem("isLogging")
  window.location.reload()
}
const Menu = (props) => {
    return <Fragment> 
         <div class="d-flex" id="wrapper">
        <div class="bg-gradient-getec border-right" id="sidebar-wrapper">
          <div class="sidebar-heading"> <img src={LOGO} alt="Logo" /></div>
          <div class="list-group list-group-flush">
            <Link to='/admin' class="list-group-item list-group-item-action bg-getec">Dashboard</Link>
            <Link to='/admin/relatorio' class="list-group-item list-group-item-action bg-getec">Relatório de Participante</Link>
            <a class="list-group-item list-group-item-action bg-getec" href='' onClick={() => logout()}>Sair</a> 
          </div>
        </div>
        <div id="page-content-wrapper">

          <nav class="bg-gradient-getec2 navbar navbar-expand-lg  border-bottom">
            {/* <button class="btn btn-primary" onClick={menuToggle}>Toggle Menu</button> */}

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                <li class="nav-item active"> 
                  <button class="btn btn-primary" onClick={menuToggle}>Menu</button>
                </li>
              </ul>
            </div>
          </nav> 
          <div class="container-fluid">
            {props.children}
          </div>
        </div> 
        </div>
      </Fragment> 
  }
export default Menu