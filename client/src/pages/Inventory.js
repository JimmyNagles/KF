import React,{useState} from 'react'
import { Col, Container, Row } from 'react-materialize'
import InvCard from '../Components/Cards/Inventory/InvCard'

const Inventory = () => {

const arr= [1,2,3,4,5,6,7,8]




    return (
        <div>
         <Container  style={{height:"200px"}}>


         </Container>


            <Row>


           {arr.map((number,index) =>
<InvCard className="glass" key={index}>{number}</InvCard>
)
}

            </Row>
        </div>
    )
}

export default Inventory
