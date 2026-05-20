import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { useOutletContext } from 'react-router';
import Cart from '../src/components/Cart/Cart';

// 1. Mock react-router
vi.mock('react-router', async () => {
  const actual = await vi.importActual('react-router');
  return {
    ...actual,
    // 2. Define what useOutletContext should return
    useOutletContext: vi.fn(),
  };
});

describe('Cart component', () => {
  afterEach(() => {
    vi.resetAllMocks(); // Clear state between tests
  });

  it('renders empty cart page if cart is empty', () => {
    vi.mocked(useOutletContext).mockReturnValue({
      cartTotal: 0,
      cart: [
        {
          title: 'Test Item',
          image: '../images/product.jpg',
          id: 1,
          quantity: 1,
        },
      ],
      quantityDecrement: vi.fn(),
      quantityIncrement: vi.fn(),
      quantityDelete: vi.fn(),
      changeHandler: vi.fn(),
    });
    render(
      <MemoryRouter>
        <Cart />
      </MemoryRouter>
    );

    // using regex with the i flag allows simpler case-insensitive comparison
    const h1 = screen.getByRole('heading', {
      name: /oh no, you don't have anything in the cart/i,
    });
    const link = screen.getByRole('link', {
      name: /you can go back to the shop page by clicking here, though/i,
    });

    expect(h1).toBeInTheDocument();
    expect(link).toBeInTheDocument();
  });

  it('renders cart page if cart has an item', () => {
    vi.mocked(useOutletContext).mockReturnValue({
      cartTotal: 1,
      cart: [
        {
          title: 'Test Item',
          image: '../images/product.jpg',
          id: 1,
          quantity: 1,
          altText: 'test item',
        },
      ],
      quantityDecrement: vi.fn(),
      quantityIncrement: vi.fn(),
      quantityDelete: vi.fn(),
      changeHandler: vi.fn(),
    });
    render(
      <MemoryRouter>
        <Cart />
      </MemoryRouter>
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
});
