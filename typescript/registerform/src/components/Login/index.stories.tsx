import { ComponentMeta } from "@storybook/react";

import LoginComponent from ".";

export default {
  title: "Component/Login",
  component: LoginComponent,
} as ComponentMeta<typeof LoginComponent>;

export function Login() {
  return <LoginComponent />;
}
