import React from 'react';
import { ColorControl } from '../ColorControl';
import { BrushSizeControl } from '../BrushSizeControl';
import { ToolSelector } from '../ToolSelector';
import { ActionButtons } from '../ActionButtons';
import { ToolType } from '../../types';
import styles from './Toolbar.module.css';

interface ToolbarProps {
  strokeColor: string;
  strokeWidth: number;
  selectedTool: ToolType;
  onColorChange: (color: string) => void;
  onWidthChange: (width: number) => void;
  onToolChange: (tool: ToolType) => void;
  onClear: () => void;
  onSave: () => void;
}

export const Toolbar: React.FC<ToolbarProps> = ({
  strokeColor,
  strokeWidth,
  selectedTool,
  onColorChange,
  onWidthChange,
  onToolChange,
  onClear,
  onSave
}) => {
  return (
    <div className={styles.toolbar}>
      <ColorControl
        value={strokeColor}
        onChange={onColorChange}
      />
      <BrushSizeControl
        value={strokeWidth}
        onChange={onWidthChange}
        min={1}
        max={50}
      />
      <ToolSelector
        selectedTool={selectedTool}
        onToolChange={onToolChange}
      />
      <ActionButtons
        onClear={onClear}
        onSave={onSave}
      />
    </div>
  );
};