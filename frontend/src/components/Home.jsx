import React from 'react';
import Slider from './Slider';
import { Col, Container, Row, Card, Button } from 'react-bootstrap';
import africaSunset from '../publick/africaSunset.jpg';
import Jambotron from './Jambotron';
import creepySunset from '../publick/creepySunset.jpg';
import './styles/main.css'
const Home = () => {
    return (
      <>
      <Slider/>
      <Container className="card-body">
      <Row>
        <Col>
         <Card  className='card-item'>
          <Card.Img variant='top' src={africaSunset}/>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant='primary'>
              Learn More
            </Button>
            </Card.Body>

         </Card>
        </Col>

        <Col>
         <Card  className='card-item'>
          <Card.Img variant='top' src={africaSunset}/>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant='primary'>
              Learn More
            </Button>
            </Card.Body>

         </Card>
        </Col>

        <Col>
         <Card  className='card-item'>
          <Card.Img variant='top' src={africaSunset}/>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant='primary'>
              Learn More
            </Button>
            </Card.Body>

         </Card>
        </Col>
      </Row>

      </Container>
       <Jambotron/>
       <Container className='img-container'>
        <Row>
          <Col md={7}>
          <img src={creepySunset} alt='Sunset' height={400}></img>
          </Col>
          <Col md={5}>
            <h2>
              About
            </h2>
            <p>
              This is a sample application built with React, Redux, and React-Bootstrap.
              
            </p>
          </Col>
        </Row>
       </Container>
      </>
    )
};
export default Home;