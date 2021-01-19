import React from 'react'
import Homevid from '../Components/Grid/Homevid'
import Typical from "react-typical";
import MyHomeCard from '../Components/Cards/HomeCard/MyHomeCard';
import Background from '../Components/Grid/Background';
const home = () => {
    return (
        <div>
   <Homevid>   

       <h2 className="center  white-text  ">Super Foods</h2>
          </Homevid>

      
<Background >

    <h1>First Slide</h1>
</Background>
      
<Background >

    <h1>Second Slide</h1>
</Background>
      
<Background >

    <h1>Third Slide</h1>
</Background>
 </div>
    )
}

export default home
