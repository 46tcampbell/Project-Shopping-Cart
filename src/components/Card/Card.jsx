import styles from './Card.module.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

function Card({ image, title, id, changeHandler, altText = '' }) {
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
        <img src={image} alt={altText} />
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

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  changeHandler: PropTypes.func.isRequired,
};

export default Card;
