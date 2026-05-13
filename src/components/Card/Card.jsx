import styles from './Card.module.css';
import { useState } from 'react';

export default function Card() {
  const [quantity, setQuantity] = useState(0);
  const changeHandler = (e) => setQuantity(e.target.value);
  const quantityDecrease = () => {
    if (+quantity > 0) {
      return setQuantity(+quantity - 1);
    }
  };
  return (
    <div className={styles.cardDiv}>
      <div>
        <h3 className={styles.shopH3}>Title</h3>
      </div>
      <div>
        <img src='../../../public/images/product.jpg' alt='' />
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
              onChange={changeHandler}
            />
            <button onClick={quantityDecrease} type='button'>
              -
            </button>
            <button onClick={() => setQuantity(+quantity + 1)} type='button'>
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
