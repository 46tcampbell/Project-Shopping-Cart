import styles from './CartItem.module.css';

export default function CartItem({
  title,
  image,
  quantity,
  quantityDecrement,
  quantityIncrement,
  changeHandler,
  quantityDelete,
  id,
}) {
  return (
    <div className={styles.cardDiv}>
      <div>
        <h3 className={styles.shopH3}>{title}</h3>
      </div>
      <div>
        <img src={image} alt='' />
      </div>
      <div>
        {/* <form action=''> */}
        {/* <label htmlFor='quantity'>Quantity:</label> */}
        <div className={styles.quantityDiv}>
          <p>Quantity: {quantity}</p>
          {/* <input
              type='text'
              inputMode='numeric'
              pattern='[0-9]*'
              placeholder='Numbers only'
              id='quantity'
              className={styles.input}
              value={quantity}
              onChange={(e) => changeHandler(e, id)}
            /> */}
          <button onClick={() => quantityDecrement(id)} type='button'>
            {quantity === 1 ? '🗑️' : '-'}
          </button>
          <button onClick={() => quantityIncrement(id)} type='button'>
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
        {/* </form> */}
      </div>
    </div>
  );
}

// onSubmit={(e) => handleSubmit(e, id)}
