/* eslint-disable react/prop-types */
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider.css'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex", background: "rgba(0, 0, 0, 0.24)", position: 'absolute', right: 0, height: 100 }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex", background: "rgba(0, 0, 0, 0.24)", position: 'absolute', zIndex: 20, left: 0, height: 100 }}
      onClick={onClick}
    />
  );
}

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    style: { width: '100%', maxWidth: 600 }
  };
  const images = [
    './images/photo1.jpeg',
    './images/photo2.jpeg',
    './images/photo3.jpeg',
    './images/photo4.jpeg',
    './images/photo5.jpeg',
    './images/photo6.jpeg',
    './images/photo7.jpeg',
    './images/photo8.jpeg',
  ]
  return (
    <Slider {...settings}>
      {images.map((image, id) => (
          <div key={id} className="">
            <img src={image} width="500" height="600"/>
          </div>
      ))}
    </Slider>
  );
}