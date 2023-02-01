import React from 'react'
import './ImgSlider.css'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import {  SlidingImages } from './SliderImgCollection'


const Crousel = () => {
  const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};
  return (
    <>
    <div style={{marginTop:"1em"}}>
      <Carousel
        style={{marginTop:'40px'}}
        swipeable={false}
        draggable={false}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        showDots={false}
        slidesToSlide={1}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px">
        {SlidingImages.map((item) => (
            <div className="slider">
              <img src={item.url} alt="SlidingImages" id={item.id} />
            </div>
            
          
        ))}

      </Carousel>
      </div>
    </>
  )
}

export default Crousel