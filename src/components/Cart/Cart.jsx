import { useOutletContext, Link } from 'react-router';
import CartItem from '../CartItem/CartItem';

export default function Cart() {
  const {
    cart,
    setCart,
    quantityDecrement,
    quantityIncrement,
    changeHandler,
    cartTotal,
    quantityDelete,
  } = useOutletContext();

  if (cartTotal === 0) {
    return (
      <div>
        <h1>Oh no, you don't have anything in the cart!</h1>
        <Link to='/shop'>
          You can go back to the shop page by clicking here, though!
        </Link>
      </div>
    );
  } else {
    return cart.map((item) => {
      if (item.quantity > 0) {
        return (
          <CartItem
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
            quantity={item.quantity}
            quantityDecrement={quantityDecrement}
            quantityIncrement={quantityIncrement}
            changeHandler={changeHandler}
            quantityDelete={quantityDelete}
          />
        );
      }
    });
  }
}
