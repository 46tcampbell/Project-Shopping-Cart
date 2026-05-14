import styles from './Card.module.css';
import { useState } from 'react';

export default function Card({ image, title, id, changeHandler }) {
  const [quantity, setQuantity] = useState(0);

  const quantityDecrement = () => {
    if (quantity > 0) {
      setQuantity(+quantity - 1);
    }
  };

  const quantityIncrement = () => {
    setQuantity(+quantity + 1);
  };

  const handleSubmit = (event, id) => {
    event.preventDefault();
    changeHandler(event, id);
    // console.log(event);
    // console.log(event.target.elements[0].value);
    setQuantity(0);
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
        <form action='' onSubmit={(e) => handleSubmit(e, id)}>
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
              onChange={(e) =>
                // replace below stops any non-number values from being entered into the input
                setQuantity(e.target.value.replace(/[^0-9]/g, ''))
              }
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
