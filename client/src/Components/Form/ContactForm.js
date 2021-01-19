import React from 'react'
import { Button, Col, Container, Row, TextInput,Icon } from 'react-materialize'

const ContactForm = () => {
    return (
        <div className="box">


        

<Row>

<Col  s={12} m={12} l={12}>

<Container>
  <TextInput  s={12} m={12} l={6}
                id="TextInput-1"
              placeholder="Full Name"
               />
 <TextInput  s={12} m={12} l={6}
              id="TextInput-2"
               placeholder="Phone Number"
              />  
<TextInput  s={12} m={12} l={12} 
              id="TextInput-3"
              placeholder="Email"
              />    
</Container>

 </Col>

 </Row>
<Row>
<Col>
<Button className="glass black-text ">Next</Button>
 </Col> 
</Row>

           
        
        </div>
    )
}

export default ContactForm
