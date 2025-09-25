import type { Meta, StoryObj } from '@storybook/react';
import { ToolSelector } from '../../features/paint/components/ToolSelector';

const meta: Meta<typeof ToolSelector> = {
  title: 'Features/Paint/Componets/ToolSelector',
  component: ToolSelector,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const PenSelected: Story = {
  args: {
    selectedTool: 'pen',
    onToolChange: (tool) => console.log('Tool changed:', tool),
  },
};

export const EraserSelected: Story = {
  args: {
    selectedTool: 'eraser',
    onToolChange: (tool) => console.log('Tool changed:', tool),
  },
};