import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useSelector } from "react-redux";
import { useState, useEffect, useCallback } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { DLT, ADD, REMOVE, CLEAR } from "../redux/actions/action";

const CartItem = () => {
  const getData = useSelector((state) => state.cartreducer.cart);

  const [subTotal, setSubTotal] = useState(0);

  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(ADD(item));
  };

  const handleDecreaseCart = (item) => {
    dispatch(REMOVE(item));
  };

  const handleRemoveFromCart = (id) => {
    dispatch(DLT(id));
  };

  const handleClearCart = () => {
    dispatch(CLEAR());
  };

  const total = useCallback(() => {
    let subTotal = 0;
    getData.map((ele, k) => {
      return (subTotal = ele.price * ele.userqnty + subTotal);
    });
    setSubTotal(subTotal);
  }, [getData]);

  useEffect(() => {
    total();
  }, [total]);

  return (
    <div className="cart-container">
      <div className="cart-header">
        <div className="cart-head-1">
          <NavLink to="/">
            <h1>Shopperzz.</h1>
          </NavLink>
        </div>
        <div className="cart-head-2">
          <h2>Shopping Cart</h2>
        </div>
      </div>
      {getData.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is currently empty</p>
          <div className="start-shopping">
            <NavLink to="/">
              <KeyboardBackspaceIcon />
              <span>Start Shopping</span>
            </NavLink>
          </div>
          <img src="images/cart.gif" alt="cart" />
        </div>
      ) : (
        <div className="items-main">
          <div className="titles">
            <h3 className="product-title">Product</h3>
            <h3 className="price">Price</h3>
            <h3 className="quantity">Quantity</h3>
            <h3 className="total">Total</h3>
          </div>
          <div>
            {getData &&
              getData.map((cartItem) => (
                <div className="cart-item" key={cartItem.id}>
                  <div className="cart-product">
                    <img src={cartItem.imageURL} alt={cartItem.name} />
                    <div>
                      <h3>{cartItem.name}</h3>
                      <button onClick={() => handleRemoveFromCart(cartItem.id)}>
                        <i className="fas fa-trash smalltrash"></i>
                      </button>
                    </div>
                  </div>
                  <div className="cart-product-price">₹{cartItem.price}</div>
                  <div className="cart-product-quantity">
                    <button
                      onClick={
                        cartItem.userqnty <= 1
                          ? () => handleRemoveFromCart(cartItem.id)
                          : () => handleDecreaseCart(cartItem)
                      }
                    >
                      -
                    </button>
                    <div className="count">{cartItem.userqnty}</div>
                    <button onClick={() => handleAddToCart(cartItem)}>+</button>
                  </div>
                  <div className="cart-product-total-price">
                    ₹ {cartItem.price * cartItem.userqnty}
                  </div>
                </div>
              ))}
          </div>

          {/* Cart Summary Starts here!!! */}
          <div className="cart-summary">
            <button className="clear-btn" onClick={() => handleClearCart()}>
              Clear Cart
            </button>
            <div className="cart-checkout">
              <div className="subtotal">
                <span>Subtotal</span>
                <span className="amount">₹{subTotal}</span>
              </div>
              <p>Taxes and shipping calculated at checkout</p>
              <button>Check out</button>
              <div className="continue-shopping">
                <NavLink to="/">
                  <KeyboardBackspaceIcon />
                  <span>Continue Shopping</span>
                </NavLink>
              </div>
            </div>
          </div>
          {/* Cart Summary Ends Here */}
        </div>
      )}
    </div>
  );
};

export default CartItem;
