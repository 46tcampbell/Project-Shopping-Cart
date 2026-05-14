import App from '../App.jsx';
import Home from '../components/Home/Home.jsx';
import Shop from '../components/Shop/Shop.jsx';
import Cart from '../components/Cart/Cart.jsx';
import ErrorPage from '../components/ErrorPage/ErrorPage.jsx';

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'homepage', element: <Home /> },
      { path: 'shop', element: <Shop /> },
      { path: 'cart', element: <Cart /> },
    ],
  },
];

export default routes;
