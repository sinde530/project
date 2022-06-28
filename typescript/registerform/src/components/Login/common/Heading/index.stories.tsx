import { ComponentMeta } from "@storybook/react";

import HeadingComponent from ".";

export default {
  title: "Component/Heading",
  component: HeadingComponent,
} as ComponentMeta<typeof HeadingComponent>;

export function Login() {
  return <HeadingComponent>Title</HeadingComponent>;
}
