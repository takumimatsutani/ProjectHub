// src/components/common/Button.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from './Button';

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>テストボタン</Button>);
    const buttonElement = screen.getByText('テストボタン');
    expect(buttonElement).toBeInTheDocument();
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>クリックテスト</Button>);
    const buttonElement = screen.getByText('クリックテスト');

    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders with different variants', () => {
    const { rerender } = render(<Button variant="primary">プライマリー</Button>);
    let button = screen.getByText('プライマリー');
    expect(button).toHaveClass('bg-blue-600'); // 仮の例（実際のスタイルに合わせて調整）

    rerender(<Button variant="secondary">セカンダリー</Button>);
    button = screen.getByText('セカンダリー');
    expect(button).toHaveClass('bg-gray-200'); // 仮の例
  });

  it('is disabled when disabled prop is true', () => {
    render(<Button disabled>無効ボタン</Button>);
    const buttonElement = screen.getByText('無効ボタン');
    expect(buttonElement).toBeDisabled();
  });
});