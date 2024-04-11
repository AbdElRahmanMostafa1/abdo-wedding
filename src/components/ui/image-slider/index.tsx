"use client";
import React from "react";
import './style.css';

import Image, { StaticImageData } from "next/image";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

interface Props {
  images: StaticImageData[];
}

const responsiveSettings = [
  // {
  //   breakpoint: 800,
  //   settings: {
  //     slidesToShow: 3,
  //     slidesToScroll: 3,
  //   },
  // },
  // {
  //   breakpoint: 500,
  //   settings: {
  //     slidesToShow: 2,
  //     slidesToScroll: 2,
  //   },
  // },
];

const ImageSlider = (props: Props) => {
  const {images} = props;

  return (
    <div style={{
      // maxWidth:"800px",
      // margin: "auto"
    }}>
      <Slide
        slidesToScroll={2}
        slidesToShow={2}
        indicators={false}
        arrows={false}
        cssClass="test"
        duration={80000000}
        // responsive={responsiveSettings}
      >
        {
          images.map(image => 
            <Image 
              style={{
                userSelect: "none",
                display: "block",
                width: "auto"
              }} 
              src={image.src} 
              alt="Test" 
              width={image.width} 
              height={image.height} 
            />
          )
        }
      </Slide>
    </div>
  );
};

export default ImageSlider;
