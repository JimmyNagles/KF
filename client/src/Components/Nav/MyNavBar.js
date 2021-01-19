import React from 'react'
import {Navbar,Icon,NavItem } from "react-materialize"
import  logo  from "./Img/logo.jpeg"
const MyNavBar = () => {
    return (
<div>


<Navbar 


className="glass"
  alignLinks="right"
  brand={<a href="/"><img style={{marginTop:"30px"}} width="100px"  height="100px" src={logo} ></img></a>}
  centerLogo
  id="mobile-nav"
  menuIcon={<Icon className="black-text">menu</Icon>}
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




  <NavItem href="/About" className="telefono black-text" >About</NavItem>
  <NavItem className=" black-text" href="/Contact"> Contact</NavItem>
  <NavItem className=" black-text"  href="/Inventory">Inventory</NavItem>
  <NavItem className=" black-text "href="/">Home</NavItem>
  <NavItem className=" black-text "  >
  <i class="material-icons ">add_shopping_cart</i>
  </NavItem>
</Navbar>


 </div>
    )
}

export default MyNavBar
