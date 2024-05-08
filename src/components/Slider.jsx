import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
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
    prevArrow: <SamplePrevArrow />
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