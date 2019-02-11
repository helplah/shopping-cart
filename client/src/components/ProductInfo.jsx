import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductInfo extends Component {

  handleClick = () => {
    this.props.addToCart(this.props.id);
  }

  render() {
    return (
      <div className='product-info'>
        <div>
          <p>{this.props.name}</p>      
          <p>{"$ " + this.props.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
        </div>
        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }
}

/*
const ProductInfo = ({ num, price, addToCart }) => (
  <div className='product-info'>
    <div>
      <p>Product {num}</p>      
      <p>{"$ " + price}</p>
    </div>
    <button onClick={addToCart}>Add</button>
  </div>
);
*/

ProductInfo.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  addToCart: PropTypes.func.isRequired
};

export default ProductInfo;