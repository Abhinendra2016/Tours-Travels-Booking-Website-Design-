import React from 'react'
import ServiceCard from './ServiceCard';
import {Col} from "reactstrap"

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'


const serviceData =[
{
  
    imgurl: weatherImg,
    title:"Calculate Weather",
    desc:"vajhsvdjhasvh ajshbdja ,ahgsvc jghas,ahgvsc ",
  },
  {
    imgurl: guideImg,
    title:"Best Tour Guide",
    desc:"vajhsvdjhasvh ajshbdja ,ahgsvc jghas,ahgvsc ",
  },
  {
    imgurl: customizationImg,
    title:"Customization",
    desc:"vajhsvdjhasvh ajshbdja ,ahgsvc jghas,ahgvsc ",
  },

]

const serviceList = () => {
  return (
    <>
      {serviceData.map((item, index) => (
        <Col lg="3" key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
};


export default serviceList