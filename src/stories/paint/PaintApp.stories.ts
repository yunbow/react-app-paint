import type { Meta, StoryObj } from '@storybook/react';
import { PaintApp } from '../../features/paint/PaintApp';

const meta: Meta<typeof PaintApp> = {
  title: 'Features/Paint/PaintApp',
  component: PaintApp,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};