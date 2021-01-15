import React from 'react'
import {Navbar,Icon,NavItem } from "react-materialize"
import  logo  from "./Img/logo.jpeg"
const MyNavBar = () => {
    return (
<div>


<Navbar


className="black"
  alignLinks="right"
  brand={<img style={{marginTop:"30px"}} width="100px"  height="100px" src={logo} className="brand-logo " ></img>}
  centerLogo
  id="mobile-nav"
  menuIcon={<Icon className="white-text">menu</Icon>}
  options={{
    draggable: true,
    edge: 'left',
    inDuration: 250,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    outDuration: 200,
    preventScrolling: true
  }}
>




  <NavItem className="telefono white-text" href="">
   Contact
  </NavItem>
  <NavItem className="telefono white-text" href="components.html">
    About
  </NavItem>
  <NavItem className="telefono white-text" href="components.html">
    What We Grow
  </NavItem>
  <NavItem className="telefono white-text " href="components.html">
    How We Grow
  </NavItem>
  <NavItem className="telefono white-text " href="components.html">
  <i class="material-icons ">add_shopping_cart</i>
  </NavItem>
</Navbar>


 </div>
    )
}

export default MyNavBar
