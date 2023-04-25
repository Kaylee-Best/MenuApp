import React, { useState } from "react";

const MenuCheckoutCalculator = () => {
  // State to store the current item quantity
  const [quantity, setQuantity] = useState(1);

  // State to store the current item price
  const [price, setPrice] = useState(0);

  // Function to update the quantity when input changes
  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  // Function to update the price when input changes
  const handlePriceChange = (e) => {
    setPrice(parseFloat(e.target.value));
  };

  // Function to calculate the total price
  const calculateTotal = () => {
    return quantity * price;
  };

  return (
    <div>
      <h2>Menu Checkout Calculator</h2>
      <div>
        <label htmlFor="quantity">Quantity: </label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={handleQuantityChange}
        />
      </div>
      <div>
        <label htmlFor="price">Price: </label>
        <input
          type="number"
          id="price"
          step="0.01"
          value={price}
          onChange={handlePriceChange}
        />
      </div>
      <div>
        <h3>Total: {calculateTotal()}</h3>
      </div>
    </div>
  );
};

export default MenuCheckoutCalculator;