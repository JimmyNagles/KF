import React,{useState} from 'react'
import { Col, Container, Row } from 'react-materialize'
import InvCard from '../Components/Cards/Inventory/InvCard'
import one from "../Img/cilantro.jpg"
import two from "../Img/parsley.jpg"
import three from "../Img/peas.jpg"
import four from "../Img/radish.jpg"
import five from "../Img/redRadish.jpg"
import six from "../Img/wasabi.jpg"



const Inventory = () => {

const arr= [1,2,3,4,5,6,7,8]


const images = [one,two,three,four,five,six]




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
