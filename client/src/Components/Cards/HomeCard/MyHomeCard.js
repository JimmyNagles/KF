import React from 'react'
import { Row,Col,Card,CardTitle,Icon } from 'react-materialize'

const MyHomeCard = ({children}) => {
    return (
        <div className="valign-wrapper center-align" style={{height:"90vh"}} >
           <Row className="">
        <Col
            m={6}
            s={12}
            l={12}
          
        >
        <div className="center">

  
    <Card

    className="transparent "
 
      closeIcon={<Icon>close</Icon>}

      horizontal
      revealIcon={<Icon>more_vert</Icon>}
    >
     {children}
    </Card>

    </div>
  </Col>
</Row>
        </div>
    )
}

export default MyHomeCard
