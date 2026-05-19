// import styles from './Shop.module.css';
import Card from '../Card/Card';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useOutletContext } from 'react-router';

const propTypes = {
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
  changeHandler: PropTypes.func.isRequired,
};

function Shop() {
  const context = useOutletContext();

  useEffect(() => {
    PropTypes.checkPropTypes(propTypes, context, 'context', 'Shop');
  }, [context]);

  return context.cart.map((item) => {
    return (
      <Card
        title={item.title}
        image={item.image}
        id={item.id}
        key={item.id}
        setCart={context.setCart}
        changeHandler={context.changeHandler}
      />
    );
  });
}

export default Shop;
