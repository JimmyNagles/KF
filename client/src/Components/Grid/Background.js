import React,{useState} from 'react'
import  fotoI  from "./img/micro.jpg";
import "./style.css"

const Background = ({children}) => {



    return (
        <div className="box glass white-text ">


               {children}


        </div>




    )
}

export default Background
