import React, { useState } from "react";

function Item({ name, category }) {
  // state to keep track of whether the item is in the cart or not
  const [inCart, setInCart] = useState(false);

  // helper function to toggle the state of the item being in the cart or not
  const toggleInCart = () => {
    setInCart(!inCart);
  };

  // className to update the appearance of the item based on whether it's in the cart or not
  const itemClass = inCart ? "in-cart" : "";

  // button text to update based on whether the item is in the cart or not
  const buttonText = inCart ? "Remove from Cart" : "Add to Cart";

  return (
    <li className={itemClass}>
      <p>
        {name} - {category}
      </p>
      <button onClick={toggleInCart}>{buttonText}</button>
    </li>
  );
}

export default Item;
