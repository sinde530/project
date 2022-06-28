import { ComponentMeta } from "@storybook/react";

import HomeComponent from ".";

export default {
  title: "Pages/Home",
  component: HomeComponent,
} as ComponentMeta<typeof HomeComponent>;

export function Home() {
  return <HomeComponent />;
}
