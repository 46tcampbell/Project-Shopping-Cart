import { useOutletContext, Link } from 'react-router';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import CartItem from '../CartItem/CartItem';

const propTypes = {
  cartTotal: PropTypes.number.isRequired,
  cart: PropTypes.array.isRequired,
  quantityDecrement: PropTypes.func.isRequired,
  quantityIncrement: PropTypes.func.isRequired,
  changeHandler: PropTypes.func.isRequired,
  quantityDelete: PropTypes.func.isRequired,
};

function Cart() {
  const context = useOutletContext();

  useEffect(() => {
    PropTypes.checkPropTypes(propTypes, context, 'context', 'Cart');
  }, [context]);

  if (context.cartTotal === 0) {
    return (
      <main>
        <div>
          <h1>Oh no, you don't have anything in the cart!</h1>
          <Link to='/shop'>
            You can go back to the shop page by clicking here, though!
          </Link>
        </div>
      </main>
    );
  } else {
    return (
      <main>
        <ul>
          {context.cart.map((item) => {
            if (item.quantity > 0) {
              return (
                <li key={item.id}>
                  <CartItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    quantity={item.quantity}
                    quantityDecrement={context.quantityDecrement}
                    quantityIncrement={context.quantityIncrement}
                    changeHandler={context.changeHandler}
                    quantityDelete={context.quantityDelete}
                    altText={item.altText}
                  />
                </li>
              );
            }
          })}
        </ul>
      </main>
    );
  }
}

export default Cart;
