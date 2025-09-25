import React from 'react';
import { ColorPicker } from '../../../../components/ColorPicker';
import { Text } from '../../../../components/Text';
import styles from './ColorControl.module.css';

interface ColorControlProps {
  value: string;
  onChange: (color: string) => void;
  disabled?: boolean;
}

export const ColorControl: React.FC<ColorControlProps> = ({
  value,
  onChange,
  disabled = false
}) => {
  return (
    <div className={styles.colorControl}>
      <Text variant="label" className={styles.label}>色：</Text>
      <ColorPicker
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
};