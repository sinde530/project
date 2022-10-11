import { Link } from "react-router-dom";
import { ProductsType } from "src/types/Products";

import { CardBox, Image, TextBox, Description, Price } from "./styles";

interface Props {
  items: ProductsType;
}

export default function Items({ items }: Props) {
  const { image, url, description, price } = items;
  console.log(items);
  return (
    <CardBox>
      <Link to={url}>
        <Image src={image} alt="images" />
        <TextBox>
          <Description>{description}</Description>
          <Price>{price}</Price>
        </TextBox>
      </Link>
    </CardBox>
  );
}
