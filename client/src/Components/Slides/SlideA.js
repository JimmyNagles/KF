import React from 'react'
import  fotoI  from "./Img/micro.jpg";

const SlideA =({Img,Text,Tittle}) => {



const lefOrRight = ()=>{



}


    return (
        <div className="box">

               {/* Img of left side */}
                <div className="boxImage">


                <img className="image" src={Img || fotoI}></img>

                </div>


                    {/* text of right side */}
                    <div className="boxText">
                    <h1>{Tittle || "why Micros"}</h1>
                    <p>{Text ||"because they are healthy"}</p>
                        
                    </div>


    </div>




    )
}


export default SlideA
