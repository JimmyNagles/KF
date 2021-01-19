import React from 'react'
import { Card, CardTitle, Col, Container, Icon, Row } from 'react-materialize'
import picture from "../../Grid/img/micro.jpg"
const InvCard = ({children,name}) => {
    return (
        <Col s={12} m={6} l={4}>


<Container>




<Card
className="glass"
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image={picture} reveal waves="light"/>}
      reveal={<div><h2>text about this </h2>
      <h2>text about this </h2></div>}
      revealIcon={<Icon>more_vert</Icon>}
      title="Card Title"
    >

       
      <p>
        <a href="#">
          This is a link
        </a>
      </p>
    </Card>

    </Container>

        </Col>
        
    )
}

export default InvCard
