import React, { useState } from "react";
let itemClass = '';
let buttonText = 'Add to Cart';


function Item({ name, category }) {

  const [inCart, addToCart] = useState(false)

  function addToCartButton() {
    addToCart((inCart) => !inCart)
    changeCart(inCart)
  }

  function changeCart (isCart) {
    if (isCart) {
      itemClass = '';
      buttonText = 'Add to Cart';
    } else {
      itemClass = 'in-cart';
      buttonText = 'Remove From Cart';
    }
  }

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addToCartButton}>{buttonText}</button>
    </li>
  );
}

export default Item;
