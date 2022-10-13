import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";

import Slider from "react-slick";

export const Container = styled.div({
  width: "100%",
});

export const SliderBox = styled(Slider)`
  position: relative,
  width: 100%,
  height: 400px,

  .slick-list {
    position: absolute;
    height: 370px;
    margin: 0 auto;
    overflow: hidden;
    top: -30px;
  }

  .slick-slider{
    max-width: 100vw;
    width: 100%;
    overflow: hidden !important;
  }

  .slick-track {
    overflow-x: hidden;
  }

  .slick-track:after {
    display: none;
  }

  .slick-dots {
    margin-bottom: 3rem;
  }

  .slick-prev {
    left: 0px;
    width: 100px;
    z-index: 99;
  }

  .slick-next {
    right: 0px;
    width: 100px;
    z-index: 99;
  }

  .slick-prev:before {
    font-size: 3rem;
    color: #000;
  }

  .slick-next:before {
    font-size: 3rem;
    color: #000;
  }
`;

export const Image = styled.img({
  width: "100%",
  height: "400px",
});
