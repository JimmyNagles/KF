import React from 'react'
import {Navbar,Icon,NavItem } from "react-materialize"
import  logo  from "./Img/logo.jpeg"
const MyNavBar = ({ident}) => {
    return (
<div>


<Navbar
id={ident}
className="glass "
  alignLinks="right"
  brand={<div className="center" style={{top:"5px"}} >

<a href="/"><img className="logo" src={logo} ></img></a>
  </div>}
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




  <NavItem className=" black-text "href="/">Home</NavItem>
  <NavItem href="/About" className="telefono black-text" >About</NavItem>
  <NavItem className=" black-text" href="/Contact"> Contact</NavItem>
  <NavItem className=" black-text"  href="/Inventory">Inventory</NavItem>
  <NavItem className=" black-text "  >
  <i className="material-icons ">add_shopping_cart</i>
  </NavItem>
</Navbar>


 </div>
    )
}

export default MyNavBar
