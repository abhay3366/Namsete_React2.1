import { useDispatch } from "react-redux";
import { addItem, deleteCartItem } from "../utils/cartSlice";
import styled from "styled-components";
import { MdDelete } from "react-icons/md";

const CardWrapper = styled.div`
  margin-bottom: 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
`;

const CardContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  border-top: 1px solid #e5e7eb;
  padding: 1rem;
`;

const InfoWrapper = styled.div`
  flex: 1;
`;

const Title = styled.h3`
  font-size: 1.125rem; /* text-lg */
  font-weight: 600;
  margin-bottom: 0.25rem;
`;

const Price = styled.h3`
  color: #059669; /* green-600 */
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  color: #4b5563; /* gray-600 */
  font-size: 0.9rem;
`;

const ImageWrapper = styled.div`
  width: 8rem; /* w-32 */
  height: 8rem; /* h-32 */
  flex-shrink: 0;
`;

const ItemImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
`;

const CartButton = styled.button`
  background-color: #2563eb; /* blue-600 */
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;
  font-weight: 500;
  align-self: center;
  height: fit-content;

  &:hover {
    background-color: #1e40af; /* darker blue */
  }
`;
const DeleteCartButton = styled.button`
   backgroundColor: "white",
  color: red;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;
  font-weight: 500;
  align-self: center;
  height: fit-content;


`;

const ItemCard = ({ item,i, keyData,cardType }) => {
  console.log("keydata",keyData)
  const dispatch = useDispatch();
  return (
    <CardWrapper key={i}>
      <CardContent>
        <InfoWrapper>
          <Title>{item.card.info.name}</Title>
          <Price>
            Rs. {(item.card.info.price || item.card.info.defaultPrice) / 100}
          </Price>
          <Description> {item.card.info.description}</Description>
        </InfoWrapper>
        <ImageWrapper>
          <ItemImage
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item.card.info.imageId}`}
            alt={item.card.info.name}
          />
        </ImageWrapper>
        {cardType==' !cart' ? <CartButton onClick={() => dispatch(addItem())}>Cart</CartButton>:  
        
        <DeleteCartButton onClick={()=>{dispatch(deleteCartItem(keyData))}}>   <MdDelete size={24} color={'red'} background={"white"}  /></DeleteCartButton>}
      
      </CardContent>
    </CardWrapper>
  );
};

export default ItemCard;
