import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Outlet } from 'react-router';
import { useState, useEffect } from 'react';

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    const dataFetch = async () => {
      try {
        const data = await fetch('https://fakestoreapi.com/products', {
          signal: controller.signal,
        }).then((response) => {
          if (response.status >= 400) {
            throw new Error('server error');
          }
          return response.json();
        });
        const mappedData = data.map((obj) => ({
          id: obj.id,
          title: obj.title,
          image: obj.image,
          quantity: 0,
        }));
        setCart(mappedData);
      } catch (error) {
        console.error(error);
      }
    };
    dataFetch();
    return () => controller.abort();
  }, []);

  const cartTotal = cart.reduce(
    (accumulator, product) => accumulator + product.quantity,
    0
  );

  const quantityDecrement = (id) => {
    setCart((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: +item.quantity - 1 } : item
      )
    );
  };

  const quantityIncrement = (id) => {
    setCart((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: +item.quantity + 1 } : item
      )
    );
  };

  const changeHandler = (e, id) => {
    setCart((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + +e.target.elements[0].value }
          : item
      )
    );
  };

  return (
    <>
      <Navbar cartTotal={cartTotal} />
      <Outlet
        context={{
          cart,
          setCart,
          quantityDecrement,
          quantityIncrement,
          changeHandler,
        }}
      />
    </>
  );
}

export default App;
