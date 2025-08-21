import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemCard from "./ItemCard";
import { clearCart } from "../utils/cartSlice";
import styled from "styled-components";

const CartWrapper = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
`;

const Heading = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
`;

const ClearButton = styled.button`
  background-color: #dc2626; /* red-600 */
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;
  font-weight: 500;
  margin-bottom: 1.5rem;
  display: block;
  margin-left: auto;

  &:hover {
    background-color: #b91c1c; /* red-700 */
  }
`;

const EmptyMessage = styled.p`
  font-size: 1.1rem;
  text-align: center;
  color: #6b7280; /* gray-500 */
  margin-top: 2rem;
`;

const Cart = () => {
  const dispatch = useDispatch();
  const itemCards = useSelector((store) => store.cart.items);

  return (
    <CartWrapper>
      <Heading>🛒 Cart</Heading>

      {itemCards.length > 0 ? (
        <>
          <ClearButton onClick={() => dispatch(clearCart())}>
            Remove All Item 
          </ClearButton>
          {itemCards.map((item, i) => (
            <ItemCard item={item} key={i} cardType={"cart"} />
          ))}
        </>
      ) : (
        <EmptyMessage>Your cart is empty</EmptyMessage>
      )}
    </CartWrapper>
  );
};

export default Cart;
