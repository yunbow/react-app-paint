import type { Meta, StoryObj } from '@storybook/react';
import { BrushSizeControl } from '../../features/paint/components/BrushSizeControl';

const meta: Meta<typeof BrushSizeControl> = {
  title: 'Features/Paint/Componets/BrushSizeControl',
  component: BrushSizeControl,
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
    onChange: (value: number) => console.log('Brush size changed:', value),
  },
};

export const Thin: Story = {
  args: {
    value: 1,
    min: 1,
    max: 50,
    onChange: (value: number) => console.log('Brush size changed:', value),
  },
};

export const Thick: Story = {
  args: {
    value: 25,
    min: 1,
    max: 50,
    onChange: (value: number) => console.log('Brush size changed:', value),
  },
};

export const Disabled: Story = {
  args: {
    value: 5,
    min: 1,
    max: 50,
    disabled: true,
    onChange: (value: number) => console.log('Brush size changed:', value),
  },
};