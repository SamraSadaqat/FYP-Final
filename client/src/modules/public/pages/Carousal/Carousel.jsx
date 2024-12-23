import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  // Inline styles for the background
  const pageContainerStyle = {
    background: 'linear-gradient(135deg, #a1c4fd 50%, #c2e9fb 50%)', // Two-tone gradient background
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    padding: '20px',
  };

  // Adding shapes
  const shapeStyle = {
    position: 'absolute',
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  };

  const topLeftShapeStyle = {
    ...shapeStyle,
    top: '10%',
    left: '5%',
  };

  const bottomRightShapeStyle = {
    ...shapeStyle,
    bottom: '10%',
    right: '5%',
  };

  const carouselContainerStyle = {
    width: '100%',  // Increased the width of the container
    maxWidth: '800px', // Increased the max-width for larger screens
    margin: '0 auto',
    paddingTop: '40px',  // Increased padding
    paddingBottom: '40px',  // Increased padding
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
    borderRadius: '20px',
    backgroundColor: 'transparent',
    position: 'relative',
    zIndex: '1',
  };

  const carouselSlideStyle = {
    position: 'relative',
    textAlign: 'center',
    color: '#fff',
  };

  const imageStyle = {
    width: '100%',
    height: "auto",
    maxHeight: '500px', // Increased max height of the images
    objectFit: 'contain', // Ensures the image maintains aspect ratio
    borderRadius: '10px',
  };

  return (
    <div style={pageContainerStyle}>
      {/* Symmetrical shapes */}
      <div style={topLeftShapeStyle}></div>
      <div style={bottomRightShapeStyle}></div>

      <div style={carouselContainerStyle}>
        <Slider {...settings}>
          <div style={carouselSlideStyle}>
            <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmRlYnd0eGQ2N3I5MTljOWszMWliaDRmM2k0YXc2ZzVyemQxNzR6cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cIIlwcHQjjlCOXZVjW/giphy.gif" alt="Slide 1" style={imageStyle} />
          </div>
          <div style={carouselSlideStyle}>
            <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcm96NHlnajdrZGNieXl3bHMxeWMxM2c4bzlleGRtYjQ1cTZ0ZnkzMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LyaGVgxlGYHrW2Do1A/giphy.gif" alt="Slide 2" style={imageStyle} />
          </div>
          <div style={carouselSlideStyle}>
            <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDB3aGpyc2FrcWhyYnpvaThxaWlxdmM5NG8xZW5mdW5saHg0ODRpOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZxEMJcE2BMuC9d0h9Y/giphy.gif" alt="Slide 3" style={imageStyle} />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
