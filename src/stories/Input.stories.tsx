import type { Meta, StoryObj } from "@storybook/react";
import "../scss/style.scss";
import InputBar from "../components-shared/input-bar/input-bar";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Input",
  component: InputBar,
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
  args: {},
} satisfies Meta<typeof InputBar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    children: (
      <InputBar>
        <InputBar.Input />
      </InputBar>
    ),
  },
};

export const WithLabel: Story = {
  args: {
    children: (
      <InputBar>
        <InputBar.Label>Label</InputBar.Label>
        <InputBar.Input />
      </InputBar>
    ),
  },
};

export const WithError: Story = {
  args: {
    children: (
      <InputBar>
        <InputBar.Input />
        <InputBar.Error>Error message</InputBar.Error>
      </InputBar>
    ),
  },
};

export const PrimaryBorder: Story = {
  args: {
    children: (
      <InputBar variant="primary-border">
        <InputBar.Input />
      </InputBar>
    ),
  },
};

export const WhiteBorder: Story = {
  args: {
    children: (
      <InputBar variant="white-border">
        <InputBar.Input />
      </InputBar>
    ),
  },
};
