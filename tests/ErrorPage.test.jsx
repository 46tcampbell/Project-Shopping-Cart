import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router';
import userEvent from '@testing-library/user-event';
import routes from '../src/routes/routes.jsx';
// import App from '../src/App.jsx';

describe('ErrorPage component', () => {
  it('renders heading correctly', () => {
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

  it('renders home page link correctly', () => {
    // const user = userEvent.setup();
    const router = createMemoryRouter(routes, {
      initialEntries: ['/undefined'],
    });

    render(<RouterProvider router={router} />);

    const link = screen.getByRole('link', {
      name: /you can go back to the home page by clicking here, though/i,
    });
    expect(link).toBeInTheDocument();
  });

  it('renders homepage when link is clicked', async () => {
    const user = userEvent.setup();
    const router = createMemoryRouter(routes, {
      initialEntries: ['/undefined'],
    });
    render(<RouterProvider router={router} />);

    const link = screen.getByRole('link', {
      name: /you can go back to the home page by clicking here, though/i,
    });
    await user.click(link);

    const h1 = await screen.findByRole('heading', {
      level: 1,
      name: /the shop/i,
    });
    expect(h1).toBeInTheDocument();
  });
});
