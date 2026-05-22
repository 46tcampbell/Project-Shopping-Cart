import styles from './CartItem.module.css';
import PropTypes from 'prop-types';

function CartItem({
  title,
  image,
  quantity,
  quantityDecrement,
  quantityIncrement,
  quantityDelete,
  id,
  altText = '',
}) {
  return (
    <div className={styles.cardDiv}>
      <div className={styles.imgDiv}>
        <img className={styles.img} src={image} alt={altText} />
      </div>
      <div className={styles.detailsDiv}>
        <div>
          <h3 className={styles.shopH3}>{title}</h3>
        </div>
        <div className={styles.quantityDiv}>
          <button
            className={styles.crementBtn}
            onClick={() => quantityDecrement(id)}
            type='button'
          >
            {quantity === 1 ? '🗑️' : '-'}
          </button>
          <p>Quantity: {quantity}</p>
          <button
            className={styles.crementBtn}
            onClick={() => quantityIncrement(id)}
            type='button'
          >
            +
          </button>
        </div>
        <button
          onClick={() => quantityDelete(id)}
          className={styles.submitBtn}
          type='button'
        >
          Remove from Cart
        </button>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  quantityDecrement: PropTypes.func.isRequired,
  quantityIncrement: PropTypes.func.isRequired,
  quantityDelete: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default CartItem;
