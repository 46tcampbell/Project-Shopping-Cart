import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router';
import userEvent from '@testing-library/user-event';
import routes from '../src/routes/routes.jsx';
// import App from '../src/App.jsx';

describe('App component', () => {
  it('renders navbar', () => {
    const router = createMemoryRouter(routes);
    render(<RouterProvider router={router} />);

    // using regex with the i flag allows simpler case-insensitive comparison
    const navbar = screen.getByRole('navigation');

    expect(navbar).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    const router = createMemoryRouter(routes);
    render(<RouterProvider router={router} />);

    // using regex with the i flag allows simpler case-insensitive comparison
    const homepage = screen.getByRole('link', { name: /homepage/i });
    const shop = screen.getByRole('link', { name: /shop/i });
    const cart = screen.getByRole('link', { name: /cart/i });

    expect(homepage).toBeInTheDocument();
    expect(shop).toBeInTheDocument();
    expect(cart).toBeInTheDocument();
  });

  it('renders correct h1', () => {
    const router = createMemoryRouter(routes);
    render(<RouterProvider router={router} />);

    // using regex with the i flag allows simpler case-insensitive comparison
    const h1 = screen.getByRole('heading', { level: 1, name: /the shop/i });

    expect(h1).toBeInTheDocument();
  });

  it('renders correct h2', () => {
    const router = createMemoryRouter(routes);
    render(<RouterProvider router={router} />);

    // using regex with the i flag allows simpler case-insensitive comparison
    const h2 = screen.getByRole('heading', {
      level: 2,
      name: /you've arrived! come in and check out what the shop has to offer./i,
    });

    expect(h2).toBeInTheDocument();
  });

  it('renders correct images', () => {
    const router = createMemoryRouter(routes);
    render(<RouterProvider router={router} />);

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

  /* While writing below test, realized that the shop page
is an accessibility tree nightmare so try to update that page 
once tests are complete and re-write if needed. */
  it('renders shop page when clicked', async () => {
    const user = userEvent.setup();
    const router = createMemoryRouter(routes);
    render(<RouterProvider router={router} />);

    const shop = screen.getByRole('link', { name: /shop/i });
    await user.click(shop);

    const cardText = await screen.findByRole('textbox', { name: /quantity/i });
    expect(cardText).toBeInTheDocument();
  });

  it('renders empty cart page when clicked with no items', async () => {
    const user = userEvent.setup();
    const router = createMemoryRouter(routes);
    render(<RouterProvider router={router} />);

    const cart = screen.getByRole('link', { name: /cart/i });
    await user.click(cart);

    const h1 = await screen.findByRole('heading', {
      name: /oh no, you don't have anything in the cart/i,
    });
    expect(h1).toBeInTheDocument();
  });

  it('renders cart page with items when clicked with items in cart', async () => {
    const user = userEvent.setup();
    const router = createMemoryRouter(routes);
    render(<RouterProvider router={router} />);

    const shop = screen.getByRole('link', { name: /shop/i });
    await user.click(shop);
    const incrementBtn = await screen.findAllByRole('button', { name: '+' });
    await user.click(incrementBtn[0]);
    const addBtn = await screen.findAllByRole('button', {
      name: /add to cart/i,
    });
    await user.click(addBtn[0]);
    const cart = await screen.findByRole('link', { name: /cart/i });
    await user.click(cart);

    const removeBtn = await screen.findByRole('button', {
      name: /remove from cart/i,
    });
    expect(removeBtn).toBeInTheDocument();
  });

  it('renders homepage when clicked', async () => {
    const user = userEvent.setup();
    const router = createMemoryRouter(routes);
    render(<RouterProvider router={router} />);

    const homepage = screen.getByRole('link', { name: /homepage/i });
    await user.click(homepage);

    const h1 = await screen.findByRole('heading', {
      level: 1,
      name: /the shop/i,
    });
    expect(h1).toBeInTheDocument();
  });

  it('renders error page when undefined url is used', async () => {
    // const user = userEvent.setup();
    const router = createMemoryRouter(routes, {
      initialEntries: ['/undefined'],
    });

    render(<RouterProvider router={router} />);

    const error = screen.getByRole('heading', {
      name: /oh no, this route doesn't exist/i,
    });
    expect(error).toBeInTheDocument();
  });
});
