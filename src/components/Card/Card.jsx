import styles from './Card.module.css';
import { useState } from 'react';

export default function Card({ image, title }) {
  const [quantity, setQuantity] = useState(0);

  const quantityDecrement = () => {
    if (quantity > 0) {
      setQuantity(+quantity - 1);
    }
  };

  const quantityIncrement = () => {
    setQuantity(+quantity + 1);
  };
  return (
    <div className={styles.cardDiv}>
      <div>
        <h3 className={styles.shopH3}>{title}</h3>
      </div>
      <div>
        <img src={image} alt='' />
      </div>
      <div>
        <form action=''>
          <label htmlFor='quantity'>Quantity:</label>
          <div className={styles.quantityDiv}>
            <input
              type='text'
              inputMode='numeric'
              pattern='[0-9]*'
              placeholder='Numbers only'
              id='quantity'
              className={styles.input}
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <button onClick={quantityDecrement} type='button'>
              -
            </button>
            <button onClick={quantityIncrement} type='button'>
              +
            </button>
          </div>
          <button className={styles.submitBtn} type='submit'>
            Add to Cart
          </button>
        </form>
      </div>
    </div>
  );
}
