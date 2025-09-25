import React from 'react';
import { Button } from '../../../../components/Button';
import { ToolType } from '../../types';
import styles from './ToolSelector.module.css';

interface ToolSelectorProps {
  selectedTool: ToolType;
  onToolChange: (tool: ToolType) => void;
}

export const ToolSelector: React.FC<ToolSelectorProps> = ({
  selectedTool,
  onToolChange
}) => {
  return (
    <div className={styles.toolSelector}>
      <Button
        variant={selectedTool === 'pen' ? 'active' : 'default'}
        onClick={() => onToolChange('pen')}
      >
        ペン
      </Button>
      <Button
        variant={selectedTool === 'eraser' ? 'active' : 'default'}
        onClick={() => onToolChange('eraser')}
      >
        消しゴム
      </Button>
    </div>
  );
};