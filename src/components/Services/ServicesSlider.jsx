import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';

// Import Slick styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import CSS
import './ServicesSlider.css';

// Use relative imports instead of absolute paths
import flightImg from '../../assets/Door.svg';
import foodImg from '../../assets/Door1.svg';
import discoverImg from '../../assets/Door2.svg';
import esimImg from '../../assets/Door3.svg';
import accommodationImg from '../../assets/Door4.svg';

const ServicesSlider = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Calculate slides to show based on screen width
  const getSlidesToShow = () => {
    if (windowWidth < 480) return 1;
    if (windowWidth < 768) return 1.2; // Show partial slide on mobile
    if (windowWidth < 992) return 2;
    if (windowWidth < 1200) return 2.5; // Show partial slide on tablets
    return 3;
  };

  // Calculate center padding based on window width
  const getCenterPadding = () => {
    if (windowWidth < 480) return '30px';
    if (windowWidth < 768) return '40px';
    return '60px';
  };

  // Slider settings optimized for full-width experience
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: getSlidesToShow(),
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: true,
    centerMode: true,
    centerPadding: getCenterPadding(),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '60px'
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '50px'
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '40px'
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '30px'
        }
      }
    ]
  };

  // Service data with descriptions
  const services = [
    { 
      img: foodImg,
      alt: "Food", 
      title: "Food",
      description: "Discover local cuisine" 
    },
    { 
      img: flightImg,
      alt: "Flight", 
      title: "Flight",
      description: "Book your flights" 
    },
    { 
      img: discoverImg,
      alt: "Discover", 
      title: "Discover",
      description: "Explore Morocco" 
    },
    { 
      img: esimImg,
      alt: "eSIM", 
      title: "eSIM",
      description: "Stay connected" 
    },
    { 
      img: accommodationImg,
      alt: "Accommodation", 
      title: "Accommodation",
      description: "Find the perfect stay" 
    }
  ];

  return (
    <section id="services" className="services-slider-wrapper">
      <div className="services-slider-container">
        <h2 className="services-title">Our Services</h2>
        <p className="services-subtitle">Everything you need for your Moroccan adventure</p>
        
        <Slider {...settings}>
          {services.map((service, index) => (
            <div className="service-slide" key={index}>
              <img src={service.img} alt={service.alt} className="service-image" />
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ServicesSlider;