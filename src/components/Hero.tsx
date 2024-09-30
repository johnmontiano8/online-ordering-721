"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";

const Hero: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const images = [
    { src: "/banner-1.jpg", alt: "Product 1" },
    { src: "/banner-2.jpg", alt: "Product 2" },
    { src: "/banner-3.jpg", alt: "Product 3" },
  ];

  return (
    <div className="mb-8">
      <div className="mx-auto px-8 py-8 flex justify-center items-center">
        <div className="w-full max-w-3xl">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div
                key={index}
                className="carousel-item relative flex justify-center items-center"
              >
                <Image
                  className="object-contain border border-gray-300 rounded-xl"
                  src={image.src}
                  alt={image.alt}
                  width={800}
                  height={300}
                  style={{ objectFit: "contain" }}
                  priority={index === 0}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
