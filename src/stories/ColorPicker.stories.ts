import type { Meta, StoryObj } from '@storybook/react';
import { ColorPicker } from '../components/ColorPicker';

const meta: Meta<typeof ColorPicker> = {
  title: 'Components/ColorPicker',
  component: ColorPicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: '#000000',
    onChange: (color: string) => console.log('Color changed:', color),
  },
};

export const Red: Story = {
  args: {
    value: '#ff0000',
    onChange: (color: string) => console.log('Color changed:', color),
  },
};

export const Blue: Story = {
  args: {
    value: '#0000ff',
    onChange: (color: string) => console.log('Color changed:', color),
  },
};

export const Disabled: Story = {
  args: {
    value: '#000000',
    disabled: true,
    onChange: (color: string) => console.log('Color changed:', color),
  },
};