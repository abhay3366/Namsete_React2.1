import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaPlus, FaMinus, FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteCartItem } from "../utils/cartSlice";

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
const ItemCard1 = ({ item, keyData, setAllTotals,cartItems,itemCards }) => {
  const [quantity, setQuantity] = useState(1);
  
  useEffect(() => {
    const price = !item.card.info.price
      ? item.card.info.defaultPrice
      : item.card.info.price;

    setAllTotals((prev) => {
      const newTotals = [...prev]; // copy existing array
      console.log(prev)

      newTotals[keyData] = (price / 100) * quantity; // set current item total
      return newTotals; // return new array
    });
  }, [quantity,itemCards, item.card.info.price, item.card.info.defaultPrice, keyData,deleteCartItem,cartItems]);

  const dispatch = useDispatch();
  return (
    <>
      <tr>
        <td>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item.card.info.imageId}`}
              alt={item.card.info.name}
            />
            <div>
              <div>{item.card.info.name}</div>
              {item.card.info.description && (
                <div style={{ fontSize: "0.8rem", color: "#555" }}>
                  {item.card.info.description}
                </div>
              )}
            </div>
          </div>
        </td>
        <td>
          {" "}
          Rs.{" "}
          {(!item.card.info.price
            ? item.card.info.defaultPrice
            : item.card.info.price) / 100}
        </td>
        <td>
          <QuantityControl>
            <button
              disabled={quantity === 1}
              onClick={() => setQuantity(quantity - 1)}
            >
              <FaMinus />
            </button>
            <input type="number" value={quantity} readOnly />
            <button onClick={() => setQuantity(quantity + 1)}>
              <FaPlus />
            </button>
          </QuantityControl>
        </td>
        <td>
          Rs.{" "}
          {((!item.card.info.price
            ? item.card.info.defaultPrice
            : item.card.info.price) /
            100) *
            quantity.toFixed(2)}
        </td>
        <td>
          {
            <RemoveBtn
              onClick={() => {
                dispatch(deleteCartItem(keyData));

                 setAllTotals((prev) => {
                  const newTotals = [...prev];
                  newTotals.splice(keyData, 1); // remove this item’s total
                  return newTotals;
                });
              }}
            >
              <FaTimes size={24} color={"red"} background={"white"} />
            </RemoveBtn>
          }
        </td>
      </tr>
    </>
  );
};

export default ItemCard1;
