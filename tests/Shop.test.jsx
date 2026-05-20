import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Shop from '../src/components/Shop/Shop';

// 1. Mock react-router
vi.mock('react-router', async () => {
  const actual = await vi.importActual('react-router');
  return {
    ...actual,
    // 2. Define what useOutletContext should return
    useOutletContext: () => ({
      cart: [
        {
          title: 'Test Item',
          image: '../images/product.jpg',
          id: 1,
        },
      ],
      setCart: vi.fn(),
      changeHandler: vi.fn(),
    }),
  };
});

describe('Shop component', () => {
  it('renders card with correct info from useOutletContext', () => {
    render(<Shop />);

    // using regex with the i flag allows simpler case-insensitive comparison
    const h3 = screen.getByRole('heading', { level: 3, name: /test item/i });

    expect(h3).toBeInTheDocument();
  });
});
