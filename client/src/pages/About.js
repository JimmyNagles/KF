import React from 'react'
import { Card, Col, Container, Row } from 'react-materialize'
import MyNavBar from '../Components/Nav/MyNavBar'

const About = () => {
    return (
        <div style={{height:"100vh"}}>
       <MyNavBar></MyNavBar>


       <Container  style={{height:"200px"}}>


</Container>

          <Container>
        
<Row>

    <Col s={12} m={12} l={4}>
    <Card>
<p>Juan</p>
        
    </Card>
    </Col>


    <Col s={12} m={12} l={4}>
    <Card>
    <p>Lucy</p>
    </Card>
    </Col>
    <Col s={12} m={12} l={4}>
    <Card>
    <p>JImmy </p>
    </Card>
    </Col>
</Row>
          
          </Container>
        </div>
    )
}

export default About
