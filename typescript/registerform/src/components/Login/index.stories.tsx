import { ComponentMeta } from "@storybook/react";

import LoginComponent from ".";

export default {
  title: "Pages/SceneInfo",
  component: LoginComponent,
} as ComponentMeta<typeof LoginComponent>;

export function SceneInfo() {
  return <LoginComponent />;
}
