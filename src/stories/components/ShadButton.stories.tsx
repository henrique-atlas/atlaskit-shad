import type { Meta, StoryObj } from '@storybook/react';

import { Button as ShadButton } from '@/components/ui/button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/ShadButton',
  component: ShadButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   size
  // },
} satisfies Meta<typeof ShadButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    size: "default",
  },
};

export const Secondary = () => {
  return (
    <ShadButton>Hello</ShadButton>
  )
} 
// export const Secondary: Story = {
//   args: {
//     label: 'ShadButton',
//   },
// };
