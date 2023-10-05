import React from 'react'
import './NewsLetter.css'
import{ Container,Row,Col} from 'reactstrap'
import maletourist from '../assets/images/male-tourist.png'
const NewsLetter = () => {
  return (
    <section className="newsletter">
    <Container>
        <Row>
            <Col lg='6'>
                <div className="newsletter__content">
                    <h2>Subscribe now to get useful traveling information</h2>
                </div>
                    <div className="newsletter__input">
                    <input type="email" placeholder='Enter your email'/>
                <button className="btn newsletter__btn">Subscribe</button>               
                </div>

               <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tenetur earum soluta id exercitationem quis adipisci.
               </p>
            </Col>
            <Col lg="6">
            <div className="newletter_img">
                <img src={maletourist} alt="" />
            </div>
            </Col>
        </Row>
    </Container>
    </section>
  )
}

export default NewsLetter