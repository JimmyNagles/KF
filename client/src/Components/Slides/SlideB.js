import React from 'react'
import  fotoI  from "./Img/micro.jpg";

const SlideB = ({Img,Text,Tittle}) => {


        return (
            <div className="box">
    
               {/* text of left side */}
    
               <div className="boxText">
                    <h1>{Tittle || "why Micros"}</h1>
                    <p>{Text ||"because they are healthy"}</p>
                        
                    </div>


                    {/* Img of right side */}

                        <div className="boxImage">
    
    
                        <img className="image" src={Img || fotoI}></img>

                        </div>
    
    
        </div>
    
    
    
    
        )
    }
    
    
export default SlideB
