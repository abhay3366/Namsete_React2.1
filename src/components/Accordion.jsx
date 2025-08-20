import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import styled from "styled-components";

// Wrapper for all items
const AccordionWrapper = styled.div`
  margin-top: 1rem;
`;

// Each item card
const ItemCard = styled.div`
  margin-bottom: 1rem;
  border: 1px solid #e5e7eb; /* gray-200 */
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  background: #fff;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.12);
  }
`;

// Flex container for card content
const ItemContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  padding: 1rem;
  align-items: flex-start;
`;

// Left side text content
const ItemText = styled.div`
  flex: 1;

  h3 {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.4rem;
    color: #111827; /* gray-900 */
  }

  .price {
    color: #059669; /* green-600 */
    font-weight: 500;
    margin-bottom: 0.4rem;
  }

  p {
    font-size: 0.9rem;
    color: #4b5563; /* gray-600 */
    line-height: 1.4;
  }
`;

// Right side image
const ItemImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 10px;
  object-fit: cover;
  flex-shrink: 0;
`;

// Add to Cart button
const CartButton = styled.button`
  background-color: #f59e0b; /* amber-500 */
  color: white;
  font-size: 0.9rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  align-self: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #d97706; /* amber-600 */
  }
`;

const Accordion = ({ itemCards, openIndex1, index }) => {
  const dispatch = useDispatch();

  return (
    <AccordionWrapper>
      {openIndex1 === 1 &&
        itemCards.map((item, i) => (
          <ItemCard key={i}>
            <ItemContent>
              <ItemText>
                <h3>{item.card.info.name}</h3>
                <div className="price">
                  Rs. {(item.card.info.price || item.card.info.defaultPrice) / 100}
                </div>
                <p>{item.card.info.description}</p>
              </ItemText>

              <ItemImage
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item.card.info.imageId}`}
                alt={item.card.info.name}
              />

              <CartButton onClick={() => dispatch(addItem(item))}>
                Add to Cart
              </CartButton>
            </ItemContent>
          </ItemCard>
        ))}
    </AccordionWrapper>
  );
};

export default Accordion;
