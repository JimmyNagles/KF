import React from 'react'
import "./style.css"
import FastV from "./Video/FastVersion.mp4"
import ImageKF from "./img/KFimg.jpg"

const Homevid = (props) => {
    return (
        <div style={{height:"100vh"}}  >






<video
      
        autoPlay
        muted
        loop
        style={{
            minWidth:"100%",
          position: "absolute",
          left: "50%",
          top: "50%",
          objectFit: "cover",
          transform: "translate(-50%,-50%)",
          zIndex: "-1",
        }}
      > 
        <source src={FastV}></source>
      </video>
      

<div style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",marginTop:"100px"}}>
{props.children}

</div>

          



        </div>
    )
}

export default Homevid
