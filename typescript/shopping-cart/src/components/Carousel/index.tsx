/* eslint-disable react/jsx-props-no-spreading */
import { Link } from "react-router-dom";

import SlideItem from "src/api/slide";

import { Container, SliderBox, Image } from "./styled";

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Container>
      <SliderBox {...settings}>
        {SlideItem.map(({ id, image, url }) => (
          <Link to={url} key={id}>
            <Image src={image} alt="image1" />
          </Link>
        ))}
      </SliderBox>
    </Container>
  );
}
