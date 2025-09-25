import React from 'react';
import { RangeSlider } from '../../../../components/RangeSlider';
import { Text } from '../../../../components/Text';
import styles from './BrushSizeControl.module.css';

interface BrushSizeControlProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  disabled?: boolean;
}

export const BrushSizeControl: React.FC<BrushSizeControlProps> = ({
  value,
  onChange,
  min = 1,
  max = 50,
  disabled = false
}) => {
  return (
    <div className={styles.brushSizeControl}>
      <Text variant="label" className={styles.label}>線の太さ：</Text>
      <RangeSlider
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        disabled={disabled}
      />
      <Text variant="value">{value}px</Text>
    </div>
  );
};