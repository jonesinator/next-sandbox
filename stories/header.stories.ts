import type { Meta, StoryObj } from "@storybook/react";
import Header from "../app/components/header";
import "../app/globals.css";

const meta = {
  title: "Header",
  component: Header,
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultHeader: Story = {
  args: {
    title: "Baz",
    subtitle: "Quux",
  },
};
