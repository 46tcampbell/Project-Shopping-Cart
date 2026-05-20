import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Home from '../src/components/Home/Home.jsx';

describe('Home component', () => {
  it('renders correct h1', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    // using regex with the i flag allows simpler case-insensitive comparison
    const h1 = screen.getByRole('heading', { level: 1, name: /the shop/i });

    expect(h1).toBeInTheDocument();
  });

  it('renders correct h2', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    // using regex with the i flag allows simpler case-insensitive comparison
    const h2 = screen.getByRole('heading', {
      level: 2,
      name: /you've arrived! come in and check out what the shop has to offer./i,
    });

    expect(h2).toBeInTheDocument();
  });

  it('renders correct images', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    // using regex with the i flag allows simpler case-insensitive comparison
    const img1 = screen.getByRole('img', {
      name: /generic storefront/i,
    });
    const img2 = screen.getByRole('img', {
      name: /open shop sign/i,
    });
    const img3 = screen.getByRole('img', {
      name: /bridie's storefront/i,
    });

    expect(img1).toBeInTheDocument();
    expect(img2).toBeInTheDocument();
    expect(img3).toBeInTheDocument();
  });
});
