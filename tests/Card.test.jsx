import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Card from '../src/components/Card/Card';

// 1. Mock react-router
// vi.mock('react-router', async () => {
//   const actual = await vi.importActual('react-router');
//   return {
//     ...actual,
//     // 2. Define what useOutletContext should return
//     useOutletContext: () => ({
//       cart: [
//         {
//           title: 'Test Item',
//           image: '../images/product.jpg',
//           id: 1,
//         },
//       ],
//       setCart: vi.fn(),
//       changeHandler: vi.fn(),
//     }),
//   };
// });

describe('Card component', () => {
  it('renders card with correct info', () => {
    const handleChange = vi.fn();

    render(
      <Card
        changeHandler={handleChange}
        id={1}
        title='Test Item'
        image='../images/product.jpg'
        altText='test item'
      />
    );

    // using regex with the i flag allows simpler case-insensitive comparison
    const h3 = screen.getByRole('heading', { level: 3, name: /test item/i });
    const img = screen.getByRole('img');
    const input = screen.getByRole('textbox', { name: /quantity/i });
    const button = screen.getAllByRole('button');

    expect(h3).toBeInTheDocument();
    expect(img).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(button[0]).toBeInTheDocument();
    expect(button[1]).toBeInTheDocument();
    expect(button[2]).toBeInTheDocument();
  });

  it('updates input with correct values', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(
      <Card
        changeHandler={handleChange}
        id={1}
        title='Test Item'
        image='../images/product.jpg'
        altText='test item'
      />
    );

    // using regex with the i flag allows simpler case-insensitive comparison
    const input = screen.getByRole('textbox', { name: /quantity/i });
    await user.clear(input);
    await user.type(input, '1234');

    expect(input).toHaveValue('1234');
  });

  it('should call onClick function for buttons', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(
      <Card
        changeHandler={handleChange}
        id={1}
        title='Test Item'
        image='../images/product.jpg'
        altText='test item'
      />
    );

    // using regex with the i flag allows simpler case-insensitive comparison
    const button = screen.getAllByRole('button');
    const input = screen.getByRole('textbox', { name: /quantity/i });
    // Below clicks are on the '+' button
    await user.click(button[1]);
    await user.click(button[1]);
    expect(input).toHaveValue('2');

    // Below clicks are on the '-' button
    await user.click(button[0]);
    expect(input).toHaveValue('1');

    // Below clicks are on the 'Add To Cart' button

    await user.click(button[2]);
    expect(input).toHaveValue('0');
  });

  it('should not call onClick function for buttons', async () => {
    const handleChange = vi.fn();
    render(
      <Card
        changeHandler={handleChange}
        id={1}
        title='Test Item'
        image='../images/product.jpg'
        altText='test item'
      />
    );

    // using regex with the i flag allows simpler case-insensitive comparison
    const input = screen.getByRole('textbox', { name: /quantity/i });

    expect(input).toHaveValue('0');
  });
});
