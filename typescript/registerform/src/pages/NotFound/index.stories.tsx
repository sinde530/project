import { ComponentMeta } from "@storybook/react";

import NotFoundComponent from ".";

export default {
  title: "Pages/NotFound",
  component: NotFoundComponent,
} as ComponentMeta<typeof NotFoundComponent>;

export function NotFound() {
  return <NotFoundComponent />;
}
