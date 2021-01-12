import React,{useState} from 'react'
import  fotoI  from "./img/micro.jpg";


const Background = ({texto, foto, fotoB, textoB}) => {



    return (
        <div className="box">

                <div className="boxImage">


                <img className="image" src={foto || fotoI}></img>

                </div>

                    <div className="boxText">
                    <h1>why microgreens</h1>
                    <p>because theyre healthy</p>
                        
                    </div>


    </div>




    )
}

export default Background
