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

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
