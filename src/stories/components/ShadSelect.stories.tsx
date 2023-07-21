import * as React from "react"
import type { Meta, StoryObj } from '@storybook/react';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Select',
  component: Select,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Teams" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="liverpol">Liverpol</SelectItem>
        <SelectItem value="barcelona">Barcelona</SelectItem>
        <SelectItem value="gremio">Gremio</SelectItem>
      </SelectContent>
    </Select>
  )
};
