// map component
// mock data return component

import Products from "src/api/products";

import Items from "./Items";

export default function Product() {
  return (
    <>
      {Products.map((items) => (
        <Items key={items.id} items={items} />
      ))}
    </>
  );
}
