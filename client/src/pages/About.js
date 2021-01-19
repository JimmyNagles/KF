import React from 'react'
import { Card, Col, Container, Row } from 'react-materialize'

const About = () => {
    return (
        <div className="box" >
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
