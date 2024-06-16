import type { Meta, StoryObj } from "@storybook/react";
import "@app/globals.css";
import Header from "@components/header";

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
