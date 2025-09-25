import React from 'react';
import styles from './Text.module.css';

interface TextProps {
  children: React.ReactNode;
  variant?: 'body' | 'label' | 'value' | 'title';
  className?: string;
}

export const Text: React.FC<TextProps> = ({
  children,
  variant = 'body',
  className = ''
}) => {
  const textClass = [
    styles.text,
    styles[variant],
    className
  ].filter(Boolean).join(' ');

  const Tag = variant === 'title' ? 'h1' : variant === 'label' ? 'label' : 'span';

  return <Tag className={textClass}>{children}</Tag>;
};