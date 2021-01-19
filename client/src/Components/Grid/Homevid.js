import React from 'react'
import "./style.css"

import ImageKF from "./img/KFimg.jpg"

const Homevid = (props) => {
    return (
        <div style={{height:"100vh"}}  >


<img src={ImageKF}
        width="100%"
        height="100%"
        
    
      />
      

<div>
{props.children}

</div>

          



        </div>
    )
}

export default Homevid
