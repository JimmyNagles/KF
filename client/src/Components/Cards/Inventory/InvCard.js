import React from 'react'
import { Button, Card, CardTitle, Col, Container, Icon, Range,Chip,Row } from 'react-materialize'
import picture from "../../Grid/img/micro.jpg"
import one from "../../../Img/cilantro.jpg"




const InvCard = ({children,name,image,}) => {



    return (
        <Col s={12} m={6} l={4}>


<Container>




<Card
className="glass"
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image={image||one} reveal waves="light"/>}
      reveal={<div>
        
        <h4>text about this </h4>
        <p>facts about this microgreenfacts about this microgreenfacts about this microgreenfacts about this microgreenfacts about this microgreen</p>
<Container>

<Row>
  
  
<Chip
  close={false}
  closeIcon={<Icon className="close">close</Icon>}
  options={null}
>
 1oz
</Chip>
<Chip
  close={false}
  closeIcon={<Icon className="close">close</Icon>}
  options={null}
>
 2oz
</Chip>
<Chip
  close={false}
  closeIcon={<Icon className="close">close</Icon>}
  options={null}
>
 4oz
</Chip><Chip
  close={false}
  closeIcon={<Icon className="close">close</Icon>}
  options={null}
>
 5-7oz
</Chip>

</Row>

        <Range 
        className=" green black-text"
  max="19.99"
  min="4.99"
  name="points"
  step="5.00"
/> 


<Button className="right green black-text" ><Icon>add_shopping_cart</Icon></Button>
 </Container>
     </div>}
      revealIcon={<Icon>more_vert</Icon>}
      title={name||"Card Title"}
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
