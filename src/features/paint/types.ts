export interface DrawingState {
  isDrawing: boolean;
  lastX: number;
  lastY: number;
  strokeColor: string;
  strokeWidth: number;
  isEraser: boolean;
}

export type ToolType = 'pen' | 'eraser';

export interface CanvasPoint {
  x: number;
  y: number;
}

export interface DrawingEvent extends MouseEvent {
  offsetX: number;
  offsetY: number;
}

export interface TouchDrawingEvent extends TouchEvent {
  offsetX: number;
  offsetY: number;
}