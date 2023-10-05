import React from 'react';
import '../styles/home.css';
import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import worldImg from '../assets/images/world.png';
import experienceImg from '../assets/images/experience.png'

import Subtitle from './../shared/Subtitle';

import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeatureTourList from '../components/Featured tours/FeatureTourList';
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery';
import Testimonial from '../components/Testimonial/Testimonial';
import NewsLetter from '../shared/NewsLetter';

const Home = () => {
  return (
    <>
      {/* =============hero section start=========== */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle dflex align-items-center">
                  <Subtitle subtitle={'Know Before You Go'} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>
                  Traveling Open the door to creating
                  <span className="highlight">memories</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Totam laboriosam, recusandae commodi deserunt vero saepe quo
                  exercitationem eum reiciendis odit ut, magni expedita aliquid
                  tempora facilis aut ad incidunt placeat.
                </p>
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box">
                <img src={heroImg} alt=""/>
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box mt-4">
                <video src={heroVideo} controls/>
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>
            <SearchBar/>
          </Row>
        </Container>
      </section>
      {/* =============hero section start=========== */}
      <section>
        <Container>
          <Row>
            <Col lg='3'>
              <h5 className="services__subtitles">what we serve</h5>
             <h2 className="services__titles">We Offer Our Best Services</h2>
            </Col>
           <ServiceList />
          </Row>
        </Container>
      </section>
      {/*==================fetaured tour section start=======*/}
<section>
  <Container>
    <Row>
      <Col lg='12' className='mb-5'>
      <Subtitle subtitle={'Explore'} />
        <h2 classNamed="featured_tour-title">Our featured Tour</h2>
      </Col>
      <FeatureTourList/>
    </Row>
  </Container>
</section>

      {/*==================fetaured tour section End=======*/}
      {/*==================Experince scetion  Start=======*/}
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="experience_content">
                <Subtitle  subtitle={'Experience'}/>
                <h2> with our all Experience<br /> we all serve you</h2>
                <p>
                  Originally from Latin, Lorem ipsum has no intelligible meaning. 
                  <br/>
                  It is simply a display of letters to be viewed as a sample with given graphical elements in a file.
                </p>
              </div>
              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>successfull trip </h6>
                </div>
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Regular Clients </h6>
                </div>
                <div className="counter__box">
                  <span>15</span>
                  <h6>Years Experince </h6>
                </div>
              </div>
            </Col>
            <Col lg='6'>
              <div className="experience__img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/*==================Experince scetion End=======*/}
      {/*==================Gallery  section Start=======*/}
       <section>
        <Container>
          <Row>
            <Col lg='12'>
            <Subtitle subtitle={'Gallery'}/>
            <h2 className="gallery__title">Visit our customer Gallery</h2>
            </Col>
            <Col lg='12'>
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
       </section>
      {/*==================Gallery scetion End=======*/}
      {/*==================Testimonial section start =======*/}
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Fans Love'}/>
              <h2 className='testinomial__title'>What about our fans say about us</h2>
            </Col>
            <Col lg='12'>
              <Testimonial/>
            </Col>
          </Row>
        </Container>

      {/*==================Testimonial section end =======*/}
      <NewsLetter/>
    </>
  );
};

export default Home;
