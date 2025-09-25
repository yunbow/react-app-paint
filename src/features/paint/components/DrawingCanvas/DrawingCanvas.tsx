import React, { useEffect } from 'react';
import styles from './DrawingCanvas.module.css';

interface DrawingCanvasProps {
  canvasRef: React.RefObject<HTMLCanvasElement>;
  onInitialize: () => void;
}

export const DrawingCanvas: React.FC<DrawingCanvasProps> = ({
  canvasRef,
  onInitialize
}) => {
  useEffect(() => {
    onInitialize();
  }, [onInitialize]);

  return (
    <div className={styles.canvasContainer}>
      <canvas
        ref={canvasRef}
        className={styles.canvas}
      />
    </div>
  );
};