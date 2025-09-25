import type { Meta, StoryObj } from '@storybook/react';
import { RangeSlider } from '../components/RangeSlider';

const meta: Meta<typeof RangeSlider> = {
  title: 'Components/RangeSlider',
  component: RangeSlider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 5,
    min: 1,
    max: 50,
    onChange: (value: number) => console.log('Value changed:', value),
  },
};

export const SmallRange: Story = {
  args: {
    value: 3,
    min: 1,
    max: 10,
    onChange: (value: number) => console.log('Value changed:', value),
  },
};

export const LargeRange: Story = {
  args: {
    value: 50,
    min: 10,
    max: 100,
    onChange: (value: number) => console.log('Value changed:', value),
  },
};

export const Disabled: Story = {
  args: {
    value: 5,
    min: 1,
    max: 50,
    disabled: true,
    onChange: (value: number) => console.log('Value changed:', value),
  },
};