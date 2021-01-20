import React from 'react'
import { Button, Col, Container, Row, TextInput,Icon,Textarea } from 'react-materialize'

const ContactForm = () => {
    return (
        <div className="box">


        

<Row>

<Col  s={12} m={12} l={12}>

<Container>
  <TextInput  s={12} m={12} l={6}
                id="TextInput-1"
              placeholder="Full Name"
              icon="create"
               />
 <TextInput  s={12} m={12} l={6}
              id="TextInput-2"
               placeholder="Phone Number"
          icon="phone"
              />  
<TextInput  s={12} m={12} l={12} 
             email
             id="TextInput-3"
             label="Email"
             validate
             icon="email"
              />    


<TextInput s={12} m={12} l={12} 
  id="Textarea-12"
  label="Brief message..."
  
  icon={<Icon>chat</Icon>}
/>
</Container>

 </Col>

 </Row>
<Row>
<Col>
<Button id="myboton" className="glass black-text ">Next</Button>
 </Col> 
</Row>

           
        
        </div>
    )
}

export default ContactForm
