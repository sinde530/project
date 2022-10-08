import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";

import Slider from "react-slick";

export const Container = styled.div({
  marginBottom: "2rem",
});

export const SliderBox = styled(Slider)`
  position: relative,
  width: 100%,
  height: 400px,

  .slick-list {
    position: absolute;
    width: 890px;
    height: 370px;
    margin: 0 auto;
    overflow: hidden;
    top: -30px;
  }

  .slick-dots {
    margin-bottom: 3rem;
  }

  .slick-prev {
    width: 100px;
    z-index: 9999;
  }

  .slick-next {
    left: 1;
    width: 100px;
    z-index: 9999;
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
