import React from 'react';
import {Carousel } from 'react-bootstrap';
import beautifullSunset from '../publick/sunset.jpg'
import creepySunset from '../publick/creepySunset.jpg'
import africaSunset from '../publick/africaSunset.jpg'
import '../main.css'
  

const Slider = () => {
 return (
    <Carousel> 
    <Carousel.Item className='slider-height'>
     <img className='d-block w-100' src={beautifullSunset} alt='Sunset'/>

     <Carousel.Caption>
        <h3> Sunset</h3>
        <p> Really beautiful</p>
     </Carousel.Caption>

     </Carousel.Item>
     <Carousel.Item className='slider-height'>
     <img className='d-block w-100' src={creepySunset} alt='Sunset'/>

     <Carousel.Caption>
        <h3> Sunset</h3>
        <p> Really beautiful</p>
     </Carousel.Caption>
     </Carousel.Item>
     <Carousel.Item className='slider-height'>
     <img className='d-block w-100' src={africaSunset} alt='Sunset'/>

     <Carousel.Caption>
        <h3> Sunset</h3>
        <p> Really beautiful</p>
     </Carousel.Caption>
     </Carousel.Item>


    </Carousel>
 )
}
export default Slider;