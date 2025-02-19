import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Button from "../components-shared/button";
import { Banana } from "lucide-react";
import "../scss/style.scss";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    onClick: fn(),
    children: "Button",
    variant: "primary",
    size: "medium",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {},
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};
export const Outline: Story = {
  args: {
    variant: "outline",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
  },
};

export const Icon: Story = {
  args: {
    variant: "icon",
    children: <Banana />,
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
  },
};

export const Large: Story = {
  args: { size: "large" },
};

export const Medium: Story = {
  args: { size: "medium" },
};

export const Small: Story = {
  args: { size: "small" },
};
