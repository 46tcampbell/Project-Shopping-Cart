import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CartItem from '../src/components/CartItem/CartItem';

describe('CartItem component', () => {
  it('renders item with correct info from props', () => {
    render(
      <CartItem
        quantityDecrement={vi.fn}
        quantityIncrement={vi.fn}
        quantityDelete={vi.fn}
        quantity={1}
        id={1}
        title='Test Item'
        image='../images/product.jpg'
        altText='test item'
      />
    );

    // using regex with the i flag allows simpler case-insensitive comparison
    const h3 = screen.getByRole('heading', { level: 3, name: /test item/i });
    const img = screen.getByRole('img');
    const p = screen.getByRole('paragraph');
    const button = screen.getAllByRole('button');

    expect(h3).toBeInTheDocument();
    expect(img).toBeInTheDocument();
    expect(p).toBeInTheDocument();
    expect(button[0]).toBeInTheDocument();
    expect(button[1]).toBeInTheDocument();
    expect(button[2]).toBeInTheDocument();
  });

  it('should call onClick function for buttons', async () => {
    const user = userEvent.setup();
    const handleClick1 = vi.fn();
    const handleClick2 = vi.fn();
    const handleClick3 = vi.fn();
    render(
      <CartItem
        quantityDecrement={handleClick1}
        quantityIncrement={handleClick2}
        quantityDelete={handleClick3}
        quantity={1}
        id={1}
        title='Test Item'
        image='../images/product.jpg'
        altText='test item'
      />
    );

    // using regex with the i flag allows simpler case-insensitive comparison
    const button = screen.getAllByRole('button');
    await user.click(button[0]);
    await user.click(button[1]);
    await user.click(button[2]);

    expect(handleClick1).toHaveBeenCalled();
    expect(handleClick2).toHaveBeenCalled();
    expect(handleClick3).toHaveBeenCalled();
  });

  it('should not call onClick function for buttons', () => {
    const handleClick1 = vi.fn();
    const handleClick2 = vi.fn();
    const handleClick3 = vi.fn();
    render(
      <CartItem
        quantityDecrement={handleClick1}
        quantityIncrement={handleClick2}
        quantityDelete={handleClick3}
        quantity={1}
        id={1}
        title='Test Item'
        image='../images/product.jpg'
        altText='test item'
      />
    );

    expect(handleClick1).not.toHaveBeenCalled();
    expect(handleClick2).not.toHaveBeenCalled();
    expect(handleClick3).not.toHaveBeenCalled();
  });
});
