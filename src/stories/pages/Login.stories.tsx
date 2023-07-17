import type { Meta, StoryObj } from '@storybook/react';

import { ProfileForm } from '@/pages/LoginForm';

const meta = {
  title: 'Example/LoginPage',
  component: ProfileForm,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProfileForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Start: Story = {}
// export const LoginPage = () => {
//   return (
//     <Button>Hello</Button>
//   )
// } 