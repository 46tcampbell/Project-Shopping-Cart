export default function Cart() {
  return <h1>Hi there, I'm the cart</h1>;
}

/* Below is code originally written for the shop page, but
I realized that this functionality is better suited for
the cart page as the quanity function updaters below are tied
to the cart state whereas the shop page will need its own quantity
info to only update cart state after Add to Cart is pressed:

<input
              type='text'
              inputMode='numeric'
              pattern='[0-9]*'
              placeholder='Numbers only'
              id='quantity'
              className={styles.input}
              value={quantity}
              onChange={(e) => changeHandler(e, id)}
            />
            <button onClick={() => quantityDecrement(id)} type='button'>
              -
            </button>
            <button onClick={() => quantityIncrement(id)} type='button'>
              +
            </button>

*/
