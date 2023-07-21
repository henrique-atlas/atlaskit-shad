import * as React from "react"
import type { Meta, StoryObj } from '@storybook/react';

import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDownIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Input } from "@/components/ui/input";
import { Slot } from "@radix-ui/react-slot";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/DropdownMenu',
  component: DropdownMenu,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger>Open</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
};

type Checked = DropdownMenuCheckboxItemProps["checked"]

export function DropdownMenuCheckboxes() {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true)
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false)
  const [showPanel, setShowPanel] = React.useState<Checked>(false)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
        >
          Status Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showActivityBar}
          onCheckedChange={setShowActivityBar}
          disabled
        >
          Activity Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showPanel}
          onCheckedChange={setShowPanel}
        >
          Panel
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

// TODO: Create atlas component from it
// Example of dropdown component with checkbox
export function SelectableDropdownMenuCheck() {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true)
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false)
  const [showPanel, setShowPanel] = React.useState<Checked>(false)
  const [getCurrentText, setCurrentText] = React.useState<string>("Please Select")

  const onSelectHandler = (ck: boolean) => {
    setShowPanel(ck)
    setCurrentText('Panel')
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          {getCurrentText} <ChevronDownIcon className="ml-4 h-4 w-4" /> 
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
        >
          Status Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showActivityBar}
          onCheckedChange={setShowActivityBar}
          disabled
        >
          Activity Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showPanel}
          onCheckedChange={onSelectHandler}
        >
          Panel
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

// TODO: Create searchable component from this
// Example of search functionality for components
export function SearchTextInputDropdownMenuCheck() {
  const [getCurrentText, setCurrentText] = React.useState<string>("Please Select")

  const [dataProvider, setDataProvider] = React.useState([{
    label: 'Status Bar',
    id: 0,
    checked: false
  },{
    label: 'Activity Bar',
    id: 1,
    checked: false
  },{
    label: 'Panel',
    id: 2,
    checked: false
  }])

  // fix concat
  const onSelectHandler = (id: number, ck: boolean) => {
    const tempData = [...dataProvider]
    const item = tempData.find(rec => rec.id === id)
    if (item) {
      item.checked = ck
      setDataProvider(tempData)
      setCurrentText(getCurrentText + item.label)
    }
  }

  // fix mult searc
  const handleSearch = (evt: React.FormEvent<HTMLInputElement>) => {
    const target = evt.target as HTMLInputElement
    // console.log("🚀 ~ file: ShadDropdown.stories.tsx:146 ~ handleSearch ~ target:", target.value)
    const tempData = [...dataProvider]
    const item = tempData.find(rec => rec.label.includes(target.value))
    if (item) {
      setDataProvider([item])
    }

  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          {getCurrentText} <ChevronDownIcon className="ml-4 h-4 w-4" /> 
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel asChild>
          <Slot className="flex">
            <div >
              <Input type="text" placeholder="search" onChange={handleSearch} />
              <MagnifyingGlassIcon className="ml-2 h-9 w-8" /> 
            </div>
          </Slot>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {dataProvider.map(data => (
          <DropdownMenuCheckboxItem
            key={data.id}
            checked={data.checked}
            onCheckedChange={ck => onSelectHandler(data.id, ck)}
          >
            {data.label}
          </DropdownMenuCheckboxItem>
        ))}
        {/* <DropdownMenuCheckboxItem
          checked={showActivityBar}
          onCheckedChange={setShowActivityBar}
          disabled
        >
          Activity Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showPanel}
          onCheckedChange={onSelectHandler}
        >
          Panel
        </DropdownMenuCheckboxItem> */}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
