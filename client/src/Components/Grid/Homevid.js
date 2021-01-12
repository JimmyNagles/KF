import React from 'react'
import "./style.css"
import Vwhite from "./Video/microBackgroundvideo.mp4";

const Homevid = (props) => {
    return (
        <div style={{display:"flex",
        flexDirection:"column",
        width:"100vh",
        height:"100vh",
        justifyContent:"center",alignItems:"center" }} >


<video
        width="100%"
        height="100%"
        autoPlay
        muted
        loop
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          objectFit: "cover",
          transform: "translate(-50%,-50%)",
          zIndex: "-1",
        }}
      >
        <source src={Vwhite}></source>
      </video>
            {props.children}
        </div>
    )
}

export default Homevid
