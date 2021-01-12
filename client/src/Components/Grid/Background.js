import React from 'react'
import  foto  from "./img/micro.jpg";


const Background = (props) => {
    return (
        <div className="box">

                <div className="boxImage">


                <img className="image" src={props.foto || foto}></img>

                </div>

                    <div className="boxText">
                    <h1>why microgreens</h1>
                    <p>because theyre healthy</p>
                        
                    </div>

        {props.children}
    </div>
    )
}

export default Background
