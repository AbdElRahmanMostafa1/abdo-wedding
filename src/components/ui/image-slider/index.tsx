import React, { useState } from "react";
import "./style.css";
import { Button } from "@mui/material";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css"; // Import Splide CSS

interface Props {
  images: StaticImageData[];
}

const ImageSlider = (props: Props) => {
  const { images } = props;
  const [splideInstance, setSplideInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    if (splideInstance) {
      splideInstance.go("+1");
    }
  };

  const prev = () => {
    if (splideInstance) {
      splideInstance.go("-1");
    }
  };

  const onSlideChanged = (splide) => {
    setActiveIndex(splide.index);
  };

  return (
    <>
      <Splide
        options={{
          // type: "fade", // or 'slide'
          // rewind: true,
          // width: 800, // Adjust this based on your design
          // height: 400, // Adjust this based on your design
          perPage: 3,
          // pagination: false,
          focus: "center",
          // autoWidth: true, // Adjust this based on your design
          type: "loop",
        }}
        onMoved={onSlideChanged}
        ref={setSplideInstance}
      >
        {images.map((img, index) => (
          <SplideSlide
            key={index}
            style={
              {
                // margin: "10",
                // transform: activeIndex === index ? "scale(1.2)" : "scale(1)",
                // transition: "transform 0.3s",
              }
            }
          >
            <img
              src={img.src}
              alt={`Slide ${index}`}
              style={{
                margin: "10",
              }}
            />
          </SplideSlide>
        ))}
      </Splide>
      <Button onClick={prev}>Prev</Button>
      <Button onClick={next}>Next</Button>
    </>
  );
};

export default ImageSlider;
