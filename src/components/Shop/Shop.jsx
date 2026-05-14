import styles from './Shop.module.css';
import Card from '../Card/Card';
import { useOutletContext } from 'react-router';

export default function Shop() {
  const [cart, setCart, quantityDecrement, quantityIncrement, changeHandler] =
    useOutletContext();

  return cart.map((item) => {
    return (
      <Card title={item.title} image={item.image} id={item.id} key={item.id} />
    );
  });
}
