import React, { useState } from "react";
import styled from "styled-components";
import { FaPlus, FaMinus, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import ItemCard from "./ItemCard";
import { clearCart } from "../utils/cartSlice";
import ItemCard1 from "./ItemCard1";

const CartContainer = styled.div`
  width: 90%;
  max-width: 900px;
  margin: 20px auto;
`;

const CartTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  th,
  td {
    padding: 10px;
    text-align: left;
  }
  th {
    border-bottom: 2px solid #ccc;
  }
  td img {
    width: 60px;
    margin-right: 10px;
  }
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
const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
`;
const Summary = styled.div`
  margin-top: 30px;
  width: 300px;
  margin-left: auto;
  font-size: 16px;
`;
const CheckoutButton = styled.button`
  margin-top: 20px;
  width: 100%;
  padding: 12px;
  background-color: black;
  color: white;
  border: none;
  font-size: 18px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #333;
  }
`;
const Cart = ({ items }) => {
  const [allTotals, setAllTotals] = useState([]);
  const dispatch = useDispatch();
  const itemCards = useSelector((store) => store.cart.items);

  return (
    <CartContainer>
      <ClearButton onClick={() => dispatch(clearCart())}>
        Remove All Item
      </ClearButton>
      {/* <CartTitle>Your Cart ({items.length} items)</CartTitle> */}
      <CartTable>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {itemCards.length === 0 ? (
            <tr>
              <td colSpan={4} style={{ textAlign: "center" }}>
                Your cart is empty
              </td>
            </tr>
          ) : (
            itemCards.map((item, i) => (
              <ItemCard1
                item={item}
                key={i}
                keyData={i}
                cardType={"cart"}
                setAllTotals={setAllTotals}
                
              />
            ))
          )}
        </tbody>
      </CartTable>
      <div>
        <Summary>
        {/* <SummaryRow>
          <span>Subtotal:</span>
          <span>$1,019.98</span>
        </SummaryRow> */}
        {/* <SummaryRow>
          <span>Sales Tax:</span>
          <span>$102.00</span>
        </SummaryRow>
        <SummaryRow>
          <span>Coupon Code:</span>
          <span>Add Coupon</span>
        </SummaryRow> */}
        <SummaryRow style={{ fontWeight: "bold", fontSize: "20px" }}>
          <span>Grand Total:</span>
          <span>Rs {allTotals.reduce((acc, val) => acc + val, 0)}</span>
        </SummaryRow>
        <CheckoutButton>Check Out</CheckoutButton>
      </Summary>
      </div>
      <div></div>
    </CartContainer>
  );
};

export default Cart;
