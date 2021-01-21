import React from 'react'
import Homevid from '../Components/Grid/Homevid'
import Typical from "react-typical";
import MyHomeCard from '../Components/Cards/HomeCard/MyHomeCard';
import Background from '../Components/Grid/Background';
import {Row,Col,Container }from 'react-materialize';
import MyNavBar from '../Components/Nav/MyNavBar';
const home = () => {
    return (
        <div>

           
   <Homevid>   

          </Homevid>

<MyNavBar  ></MyNavBar>
<Background>

    <Container className="center">



 

    <h3>

  
    <Typical className="white-text"   steps={['Welcome to Kenko Farms!', 9000, 'Dont know what microgreens are?', 5000, 'Keep reading, that might help ;)', 5000]}
        loop={Infinity}
        wrapper="p">


    </Typical>
    </h3>

    </Container>
</Background>
      
<Background >
<Container>

<h3 className="center">What exactly are microgreens?</h3>
    <p >Microgreens are young vegetable greens
         that are approximately 1–3 inches (2.5–7.5 cm) tall. They have an
          aromatic flavor and concentrated nutrient content and come in a variety of 
          colors and textures (1). Microgreens are considered baby plants, falling
           somewhere between a sprout and baby green</p>
</Container>

</Background>
      
<Background >
<Container>

<h3 className="center">How Nutritious?</h3>
    <p >Microgreens are packed with nutrients.
    They are also a great source of beneficial plant compounds like antioxidants.
    What’s more, their nutrient content is concentrated, which means that they often contain higher
     vitamin, mineral and antioxidant levels than the same quantity of mature greens
</p>
</Container>
</Background>
      
<Background >
<Container>

<h3 className="center">Health Benefits?</h3>

<Row>

    <Col l={3}>
    <h5>Heart disease</h5>
  
    <p>
     Microgreens are a rich source of polyphenols, a class of antioxidants linked to a lower risk of heart disease. Animal studies show that microgreens may lower triglyceride and “bad” LDL cholesterol levels
     </p>
    
    </Col>

    <Col l={3}>

    <h5>Alzheimer’s disease</h5>

    <p>
     Antioxidant-rich foods, including those containing high amounts of polyphenols,may be linked to a lower risk of Alzheimer’s disease
     </p>
    
    </Col>

    <Col l={3} >

    <h5>Diabetes</h5>
    <p>
     Antioxidants may help reduce the type of stress that can prevent sugar from properly entering cells. In lab studies, fenugreek microgreens appeared to enhance cellular sugar uptake by 25–44%
     </p>
    
    </Col>

    <Col l={3} >

    <h5>Certain cancers</h5>

    <p>
     Antioxidant-rich fruits and vegetables, especially those rich in polyphenols, may lower the risk of various types of cancer. Polyphenol-rich microgreens may be expected to have similar effects
     </p>   
    
    </Col>
</Row>
  
</Container>
</Background>
 </div>
    )
}

export default home
