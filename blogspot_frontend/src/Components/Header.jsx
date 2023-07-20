import React from 'react'

import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

const Header = () => {
  return (
    <div>
        <span className='title'>BLOG SPOT</span>
        <MDBCarousel className='Carousel' showIndicators showControls fade>
      <MDBCarouselItem
        className='w-100 d-block crl'
        itemId={1}
        src='https://images.unsplash.com/photo-1637637126621-ae60cdea68a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
        alt='Carousel Image 1'
      >
        
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block crl'
        itemId={2}
        src='https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
        alt='Carousel Image 2'
      >
      
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block crl'
        itemId={3}
        src='https://images.unsplash.com/photo-1515343480029-43cdfe6b6aae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1228&q=80'
        alt='Carousel Image 3'
      >
        
      </MDBCarouselItem>
    </MDBCarousel>
    </div>
  )
}

export default Header
