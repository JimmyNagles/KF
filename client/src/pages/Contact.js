import React from 'react'
import { Col, Container, Row } from 'react-materialize'
import ContactForm from '../Components/Form/ContactForm'
import MyNavBar from '../Components/Nav/MyNavBar'

const Contact = () => {
    return (
        <div  >
<MyNavBar></MyNavBar>


<Container>



    <Row >

  
  
        <Col  className="center"  s={8} m={12} l={12}  >

      
      
      <ContactForm></ContactForm>

    
        
        </Col>


     

    </Row>
</Container>
         


        </div>
    )
}

export default Contact
