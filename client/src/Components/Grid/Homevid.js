import React from 'react'
import "./style.css"
import FastV from "./Video/FastVersion.mp4"
import ImageKF from "./img/KFimg.jpg"
import InvCard from '../Cards/Inventory/InvCard'

const Homevid = (props) => {
    return (
        <div  >






<video
      
        autoPlay
        muted
        loop
        id="Myvid"
  
      > 
        <source src={FastV}></source>
      </video>
      

          



        </div>
    )
}

export default Homevid
