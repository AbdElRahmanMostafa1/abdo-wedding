import React from "react";
import { ImageSlider } from "@/components";
import image1 from "../../../public/images/1.jpg";
import image2 from "../../../public/images/2.jpg";
import image3 from "../../../public/images/3.jpg";

const OurPhotos = () => {
  const images = [image1, image2, image3, image1, image2, image3];
  return (
    <div>
      OurPhotos
      <ImageSlider images={images} />
    </div>
  );
};

export default OurPhotos;
