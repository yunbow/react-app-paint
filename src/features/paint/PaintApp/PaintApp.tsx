import React, { useState } from 'react';
import { Text } from '../../../components/Text';
import { Toolbar } from '../components/Toolbar';
import { DrawingCanvas } from '../components/DrawingCanvas';
import { useCanvas } from '../useCanvas';
import { ToolType } from '../types';
import styles from './PaintApp.module.css';

export const PaintApp: React.FC = () => {
  const [strokeColor, setStrokeColor] = useState('#000000');
  const [strokeWidth, setStrokeWidth] = useState(5);
  const [selectedTool, setSelectedTool] = useState<ToolType>('pen');

  const {
    canvasRef,
    initializeCanvas,
    setStrokeColor: updateCanvasColor,
    setStrokeWidth: updateCanvasWidth,
    setTool: updateCanvasTool,
    clearCanvas,
    saveImage
  } = useCanvas();

  const handleColorChange = (color: string) => {
    setStrokeColor(color);
    updateCanvasColor(color);
  };

  const handleWidthChange = (width: number) => {
    setStrokeWidth(width);
    updateCanvasWidth(width);
  };

  const handleToolChange = (tool: ToolType) => {
    setSelectedTool(tool);
    updateCanvasTool(tool);
  };

  return (
    <div className={styles.container}>
      <Text variant="title">お絵描きツール</Text>

      <Toolbar
        strokeColor={strokeColor}
        strokeWidth={strokeWidth}
        selectedTool={selectedTool}
        onColorChange={handleColorChange}
        onWidthChange={handleWidthChange}
        onToolChange={handleToolChange}
        onClear={clearCanvas}
        onSave={saveImage}
      />

      <DrawingCanvas
        canvasRef={canvasRef}
        onInitialize={initializeCanvas}
      />
    </div>
  );
};