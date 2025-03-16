import React from 'react';
import Slider from 'react-slick';

// Import des styles Slick
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Importez votre fichier CSS pour personnaliser le design
import './ServicesSlider.css';

// Import des images (adaptez les chemins selon votre projet)
import flightImg from '/Users/mac/my-landing-page/src/assets/Door.svg';
import foodImg from '/Users/mac/my-landing-page/src/assets/Door1.svg';
import discoverImg from '/Users/mac/my-landing-page/src/assets/Door2.svg';
import esimImg from '/Users/mac/my-landing-page/src/assets/Door3.svg';
import accommodationImg from '/Users/mac/my-landing-page/src/assets/Door4.svg';

const ServicesSlider = () => {
  // Paramètres du slider react-slick
  const settings = {
    dots: true,          // Affiche les points de navigation
    infinite: true,      // Boucle infinie
    speed: 300,          // Vitesse de transition (ms)
    slidesToShow: 3,     // Nombre de slides visibles
    slidesToScroll: 1,   // Nombre de slides à défiler par action
    responsive: [
      {
        breakpoint: 768, // En-dessous de 768px (mobile/tablette)
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div id="services" className="services-slider-wrapper">
      {/* Conteneur du titre et du slider */}
      <div className="services-slider-container">
        <h2 className="services-title">Our Services</h2>
        <Slider {...settings}>
          {/* Slide 1 : Food */}
          <div className="service-slide">
            <img src={foodImg} alt="Food" className="service-image" />
          </div>

          {/* Slide 2 : Flight */}
          <div className="service-slide">
            <img src={flightImg} alt="Flight" className="service-image" />
          </div>

          {/* Slide 3 : Discover */}
          <div className="service-slide">
            <img src={discoverImg} alt="Discover" className="service-image" />
          </div>

          {/* Slide 4 : eSIM */}
          <div className="service-slide">
            <img src={esimImg} alt="eSIM" className="service-image" />
          </div>

          {/* Slide 5 : Accommodation */}
          <div className="service-slide">
            <img
              src={accommodationImg}
              alt="Accommodation"
              className="service-image"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default ServicesSlider;
