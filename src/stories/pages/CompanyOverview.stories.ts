import type { Meta, StoryObj } from '@storybook/react';

import { CompanyOverview } from './CompanyOverview';

const meta = {
  title: 'Example/CompanyOverview',
  component: CompanyOverview,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof CompanyOverview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MainStory: Story = {};
