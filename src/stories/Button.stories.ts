import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components/Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'active', 'danger', 'success'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'ボタン',
    onClick: () => console.log('clicked'),
  },
};

export const Active: Story = {
  args: {
    children: 'アクティブ',
    variant: 'active',
    onClick: () => console.log('clicked'),
  },
};

export const Danger: Story = {
  args: {
    children: '削除',
    variant: 'danger',
    onClick: () => console.log('clicked'),
  },
};

export const Success: Story = {
  args: {
    children: '保存',
    variant: 'success',
    onClick: () => console.log('clicked'),
  },
};

export const Disabled: Story = {
  args: {
    children: '無効',
    disabled: true,
    onClick: () => console.log('clicked'),
  },
};