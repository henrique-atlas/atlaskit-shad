import * as React from "react"
import type { Meta, StoryObj } from '@storybook/react';

import { Button, Button as ShadButton } from '@/components/ui/button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/ShadButton',
  component: ShadButton,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    size: {
      options: ["default",
      "sm",
      'lg',
      "icon", null],
      control: { type: 'radio'}
    } 
  },
} satisfies Meta<typeof ShadButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  render: () => (
    <Button>Test</Button>
  )
};

export const Secondary = () => {
  return (
    <ShadButton variant="secondary">Hello</ShadButton>
  )
}
export const ErrorLarge = () => {
  return (
    <ShadButton size="lg" variant="destructive">HelloError</ShadButton>
  )
}
export const OutlineSmall = () => {
  return (
    <ShadButton size="sm" variant="outline">Hello</ShadButton>
  )
}
export const Ghost = () => {
  return (
    <ShadButton variant="ghost">Hello</ShadButton>
  )
}
export const Link = () => {
  return (
    <ShadButton variant="link">Hello</ShadButton>
  )
}