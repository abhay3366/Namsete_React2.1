import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemCard from "./ItemCard";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const itemCards = useSelector((store) => store.cart.items);
  return (
    <div>
      <h1>Cart</h1>

      <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
      {itemCards.map((item, i) => (
        <ItemCard item={item} key={i} />
      ))}
    </div>
  );
};

export default Cart;
