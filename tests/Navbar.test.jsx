import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Navbar from '../src/components/Navbar/Navbar';

describe('Navbar component', () => {
  it('renders navbar', () => {
    // const router = createMemoryRouter(routes);
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    // using regex with the i flag allows simpler case-insensitive comparison
    const navbar = screen.getByRole('navigation');

    expect(navbar).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    // const router = createMemoryRouter(routes);
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    // using regex with the i flag allows simpler case-insensitive comparison
    const homepage = screen.getByRole('link', { name: /homepage/i });
    const shop = screen.getByRole('link', { name: /shop/i });
    const cart = screen.getByRole('link', { name: /cart/i });

    expect(homepage).toBeInTheDocument();
    expect(shop).toBeInTheDocument();
    expect(cart).toBeInTheDocument();
  });
});
