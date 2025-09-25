import { useRef, useEffect, useCallback } from 'react';
import { DrawingState, CanvasPoint, ToolType } from './types';

export const useCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const drawingStateRef = useRef<DrawingState>({
    isDrawing: false,
    lastX: 0,
    lastY: 0,
    strokeColor: '#000000',
    strokeWidth: 5,
    isEraser: false
  });

  const initializeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const container = canvas.parentElement;
    if (!container) return;

    canvas.width = container.clientWidth;
    canvas.height = 500;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.strokeStyle = drawingStateRef.current.strokeColor;
    ctx.lineWidth = drawingStateRef.current.strokeWidth;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    contextRef.current = ctx;
  }, []);

  const getCoordinates = useCallback((e: MouseEvent | TouchEvent): CanvasPoint => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };

    let x: number, y: number;

    if ('touches' in e) {
      const rect = canvas.getBoundingClientRect();
      const touch = e.touches[0] || e.changedTouches[0];
      x = touch.clientX - rect.left;
      y = touch.clientY - rect.top;
    } else {
      x = e.offsetX;
      y = e.offsetY;
    }

    return { x, y };
  }, []);

  const startDrawing = useCallback((e: MouseEvent | TouchEvent) => {
    const ctx = contextRef.current;
    if (!ctx) return;

    const { x, y } = getCoordinates(e);

    drawingStateRef.current.isDrawing = true;
    drawingStateRef.current.lastX = x;
    drawingStateRef.current.lastY = y;

    ctx.beginPath();
    ctx.arc(x, y, ctx.lineWidth / 2, 0, Math.PI * 2);
    ctx.fill();
  }, [getCoordinates]);

  const draw = useCallback((e: MouseEvent | TouchEvent) => {
    if (!drawingStateRef.current.isDrawing) return;

    const ctx = contextRef.current;
    if (!ctx) return;

    e.preventDefault();

    const { x, y } = getCoordinates(e);

    ctx.beginPath();
    ctx.moveTo(drawingStateRef.current.lastX, drawingStateRef.current.lastY);
    ctx.lineTo(x, y);
    ctx.stroke();

    drawingStateRef.current.lastX = x;
    drawingStateRef.current.lastY = y;
  }, [getCoordinates]);

  const stopDrawing = useCallback(() => {
    drawingStateRef.current.isDrawing = false;
  }, []);

  const setStrokeColor = useCallback((color: string) => {
    drawingStateRef.current.strokeColor = color;
    const ctx = contextRef.current;
    if (ctx && !drawingStateRef.current.isEraser) {
      ctx.strokeStyle = color;
    }
  }, []);

  const setStrokeWidth = useCallback((width: number) => {
    drawingStateRef.current.strokeWidth = width;
    const ctx = contextRef.current;
    if (ctx) {
      ctx.lineWidth = width;
    }
  }, []);

  const setTool = useCallback((tool: ToolType) => {
    drawingStateRef.current.isEraser = tool === 'eraser';
    const ctx = contextRef.current;
    if (!ctx) return;

    if (tool === 'eraser') {
      ctx.globalCompositeOperation = 'destination-out';
    } else {
      ctx.globalCompositeOperation = 'source-over';
      ctx.strokeStyle = drawingStateRef.current.strokeColor;
    }
  }, []);

  const clearCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = contextRef.current;
    if (!canvas || !ctx) return;

    if (confirm('本当に全て消去しますか？')) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }, []);

  const saveImage = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dataURL = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = 'お絵描き作品.png';
    link.href = dataURL;
    link.click();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleMouseDown = (e: MouseEvent) => startDrawing(e);
    const handleMouseMove = (e: MouseEvent) => draw(e);
    const handleMouseUp = () => stopDrawing();
    const handleMouseOut = () => stopDrawing();
    const handleTouchStart = (e: TouchEvent) => startDrawing(e);
    const handleTouchMove = (e: TouchEvent) => draw(e);
    const handleTouchEnd = () => stopDrawing();
    const handleTouchCancel = () => stopDrawing();

    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('mouseout', handleMouseOut);
    canvas.addEventListener('touchstart', handleTouchStart);
    canvas.addEventListener('touchmove', handleTouchMove);
    canvas.addEventListener('touchend', handleTouchEnd);
    canvas.addEventListener('touchcancel', handleTouchCancel);

    const handleResize = () => initializeCanvas();
    window.addEventListener('resize', handleResize);

    return () => {
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseup', handleMouseUp);
      canvas.removeEventListener('mouseout', handleMouseOut);
      canvas.removeEventListener('touchstart', handleTouchStart);
      canvas.removeEventListener('touchmove', handleTouchMove);
      canvas.removeEventListener('touchend', handleTouchEnd);
      canvas.removeEventListener('touchcancel', handleTouchCancel);
      window.removeEventListener('resize', handleResize);
    };
  }, [startDrawing, draw, stopDrawing, initializeCanvas]);

  return {
    canvasRef,
    initializeCanvas,
    setStrokeColor,
    setStrokeWidth,
    setTool,
    clearCanvas,
    saveImage,
    drawingState: drawingStateRef.current
  };
};