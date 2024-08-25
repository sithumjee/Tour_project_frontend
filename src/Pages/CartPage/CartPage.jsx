import React, { useContext } from "react";
import { TourContext } from "../../Context/TourContext";
import { Link } from "react-router-dom";
import "./CartPage.css"; // Adjust CSS import as per your project

const CartPage = () => {
  const { cartItems, tourList, removeFromCart } = useContext(TourContext);

  // Calculate total price
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    for (const itemId in cartItems) {
      const tour = tourList.find((tour) => tour._id === itemId);
      if (tour) {
        totalPrice += tour.price;
      }
    }
    return totalPrice;
  };

  // Handle removing item from cart
  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId);
  };

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      {Object.keys(cartItems).length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {Object.keys(cartItems).map((itemId) => {
            const tour = tourList.find((tour) => tour._id === itemId);
            if (!tour) return null; // Handle case where tour is not found
            return (
              <div key={itemId} className="cart-item">
                <img className="order-image" src={tour.imageCover} alt="" />
                <div className="cart-item-info">
                  <h2>{tour.name}</h2>
                  <p>Price: Rs {tour.price}</p>
                  {/* Add more details here as needed */}
                </div>
                <button onClick={() => handleRemoveFromCart(itemId)}>
                  Remove
                </button>
              </div>
            );
          })}
          <div className="cart-total">
            <h2>Total Price: Rs {calculateTotalPrice()}</h2>
          </div>
          <div className="pay">
            <Link to="/placeorder">
              {" "}
              <button>Proceed to Checkout</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
