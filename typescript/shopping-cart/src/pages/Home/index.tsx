import { Link } from "react-router-dom";

import {
  Container,
  Section,
  Title,
  CardBox,
  Image,
  TextBox,
  Description,
  Price,
} from "./styles";

import Carousel from "../../components/Carousel";

export default function Home() {
  return (
    <Container>
      <Carousel />
      <Section>
        <Title>WEEKLY BEST</Title>
        <CardBox>
          <Link to="/">
            <Image
              src="http://cdn2-aka.makeshop.co.kr/shopimages/jogunshop/040002001559.gif?1628221767"
              alt="images"
            />
            <TextBox>
              <Description>청바지 ㄱㄴㄷㄹㅁㅂㅅ ㄱㄴㄷㄹㅁㅂㅅ</Description>
              <Price>14,300</Price>
            </TextBox>
          </Link>
        </CardBox>

        <CardBox>
          <Link to="/">
            <Image
              src="http://cdn2-aka.makeshop.co.kr/shopimages/jogunshop/040002001559.gif?1628221767"
              alt="images"
            />
            <TextBox>
              <Description>청바지 ㄱㄴㄷㄹㅁㅂㅅ ㄱㄴㄷㄹㅁㅂㅅ</Description>
              <Price>14,300</Price>
            </TextBox>
          </Link>
        </CardBox>
        <CardBox>
          <Link to="/">
            <Image
              src="http://cdn2-aka.makeshop.co.kr/shopimages/jogunshop/040002001559.gif?1628221767"
              alt="images"
            />
            <TextBox>
              <Description>청바지 ㄱㄴㄷㄹㅁㅂㅅ ㄱㄴㄷㄹㅁㅂㅅ</Description>
              <Price>14,300</Price>
            </TextBox>
          </Link>
        </CardBox>
        <CardBox>
          <Link to="/">
            <Image
              src="http://cdn2-aka.makeshop.co.kr/shopimages/jogunshop/040002001559.gif?1628221767"
              alt="images"
            />
            <TextBox>
              <Description>청바지 ㄱㄴㄷㄹㅁㅂㅅ ㄱㄴㄷㄹㅁㅂㅅ</Description>
              <Price>14,300</Price>
            </TextBox>
          </Link>
        </CardBox>
        <CardBox>
          <Link to="/">
            <Image
              src="http://cdn2-aka.makeshop.co.kr/shopimages/jogunshop/040002001559.gif?1628221767"
              alt="images"
            />
            <TextBox>
              <Description>청바지 ㄱㄴㄷㄹㅁㅂㅅ ㄱㄴㄷㄹㅁㅂㅅ</Description>
              <Price>14,300</Price>
            </TextBox>
          </Link>
        </CardBox>
        <CardBox>
          <Link to="/">
            <Image
              src="http://cdn2-aka.makeshop.co.kr/shopimages/jogunshop/040002001559.gif?1628221767"
              alt="images"
            />
            <TextBox>
              <Description>청바지 ㄱㄴㄷㄹㅁㅂㅅ ㄱㄴㄷㄹㅁㅂㅅ</Description>
              <Price>14,300</Price>
            </TextBox>
          </Link>
        </CardBox>
      </Section>
    </Container>
  );
}
