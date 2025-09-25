import React from 'react';
import { Button } from '../../../../components/Button';
import styles from './ActionButtons.module.css';

interface ActionButtonsProps {
  onClear: () => void;
  onSave: () => void;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({
  onClear,
  onSave
}) => {
  return (
    <div className={styles.actionButtons}>
      <Button variant="danger" onClick={onClear}>
        全消去
      </Button>
      <Button variant="success" onClick={onSave}>
        画像を保存
      </Button>
    </div>
  );
};