import React from "react";
import styled from "styled-components";
import { FaPlus, FaMinus, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import ItemCard from "./ItemCard";
import { clearCart } from "../utils/cartSlice";

const CartContainer = styled.div`
  width: 90%;
  max-width: 900px;
  margin: 20px auto;
`;

const CartTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const CartTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  th, td {
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

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  button {
    border: 1px solid #ccc;
    padding: 5px;
    background: #fff;
    cursor: pointer;
  }
  input {
    width: 40px;
    text-align: center;
    border: 1px solid #ccc;
    padding: 5px;
  }
`;

const RemoveBtn = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  color: #999;
  &:hover {
    color: red;
  }
`;

const PriceHighlight = styled.div`
  color: #ff6600;
  font-size: 0.9rem;
`;

const Cart = ({ items }) => {
      const dispatch = useDispatch();
      const itemCards = useSelector((store) => store.cart.items);
  return (
    <CartContainer>
       <ClearButton onClick={() => dispatch(clearCart())}>
                  Remove All Item 
                </ClearButton>
      <CartTitle>Your Cart ({items.length} items)</CartTitle>
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
          {itemCards.map((item, i) => (
            // <tr key={index}>
            //   <td>
            //     <div style={{ display: "flex", alignItems: "center" }}>
            //       <img src={item.image} alt={item.name} />
            //       <div>
            //         <div>{item.name}</div>
            //         {item.estimatedShip && <PriceHighlight>{item.estimatedShip}</PriceHighlight>}
            //         {item.subtext && <div style={{ fontSize: "0.8rem", color: "#555" }}>{item.subtext}</div>}
            //       </div>
            //     </div>
            //   </td>
            //   <td>${item.price.toFixed(2)}</td>
            //   <td>
            //     <QuantityControl>
            //       <button><FaMinus /></button>
            //       <input type="number" value={item.quantity} readOnly />
            //       <button><FaPlus /></button>
            //     </QuantityControl>
            //   </td>
            //   <td>${(item.price * item.quantity).toFixed(2)}</td>
            //   <td>
            //     <RemoveBtn><FaTimes /></RemoveBtn>
            //   </td>
            // </tr>
             <ItemCard item={item} key={i} keyData={i} cardType={"cart"} />
          ))}
        </tbody>
      </CartTable>
    </CartContainer>
  );
};

export default Cart;
