import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Typography } from '@mui/material';

// Import images
import image1 from '../assets/1.jpg';
import image2 from '../assets/2.jpg';
import image3 from '../assets/3.jpg';

const Carousel = () => {

    // Images array
    const images = [image1, image2, image3 /*, ... other images */];

    const imageStyle = {
      width: '600px', // Fixed width
      height: '350px', // Fixed height
      display: 'block',
      borderRadius: '10px',
      objectFit: 'cover' // This will cover the area without distortion
  };

    return (
      <>
      <Typography variant="h6" sx={{ mb: 4 }}>My photos</Typography>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <Slider>
                {images.map((img, idx) => (
                    <div key={idx}>
                        <img src={img} alt={`Slide ${idx + 1}`} style={imageStyle} />
                    </div>
                ))}
            </Slider>
        </div>
        </>
    );
};

export default Carousel;
