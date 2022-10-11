import Product from "src/components/Product";
import { Container, Section, Title } from "./styles";

import Carousel from "../../components/Carousel";

export default function Home() {
  return (
    <Container>
      <Carousel />
      <Section>
        <Title>WEEKLY BEST</Title>
        <Product />
      </Section>
    </Container>
  );
}
