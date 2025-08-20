import { API_URL } from "../utils/contants";
import styled from "styled-components";

const Card = styled.div`
  &.res-card {
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    overflow: hidden;
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    background: #fff;
    display: flex;
    flex-direction: column;
    height: 100%;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    }

    /* Responsive width */
    width: 100%;
    max-width: 320px;
    margin: auto;

    @media (max-width: 768px) {
      max-width: 100%;
    }
  }
`;

const Image = styled.img`
  &.res-image {
    width: 100%;
    height: 200px;
    object-fit: cover;

    @media (max-width: 768px) {
      height: 160px;
    }

    @media (max-width: 480px) {
      height: 140px;
    }
  }
`;

const Content = styled.div`
  &.res-content {
    padding: 12px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h3, h5, h6, p, a {
      text-decoration: none; /* ✅ removes underline if inside <a> */
      color: inherit;        /* ✅ keeps original color instead of link blue */
    }

    h3 {
      font-size: 1.2rem;
      font-weight: bold;
      margin-bottom: 6px;
      line-height: 1.3;
    }

    .res-rating {
      font-size: 0.9rem;
      margin-bottom: 4px;
    }

    .res-price {
      font-size: 0.85rem;
      color: #388e3c;
      margin-bottom: 6px;
    }

    .res-description {
      font-size: 0.85rem;
      color: #666;
      margin-bottom: 10px;

      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
`;

const Button = styled.button`
  &.res-btn {
    background-color: #ff5722;
    border: none;
    padding: 10px 14px;
    color: white;
    border-radius: 6px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: #e64a19;
    }

    @media (max-width: 480px) {
      font-size: 13px;
      padding: 8px 12px;
    }
  }
`;

const RestaurantCard = ({ resData }) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    aggregatedDiscountInfoV3,
  } = resData?.info;
  const price = aggregatedDiscountInfoV3?.subHeader;

  return (
    <Card className="res-card">
      <Image
        src={`${API_URL}${cloudinaryImageId}`}
        alt="Restaurant"
   Im   className="res-image"
      />
      <Content className="res-content">
        <h3 >{name}</h3>
        <h5 className="res-rating">⭐ {avgRating}</h5>
        <h6 className="res-price">💰 {price}</h6>
        <p className="res-description">{cuisines.join(", ")}</p>
        <Button className="res-btn">Order Now</Button>
      </Content>
    </Card>
  );
};

// High Order Component
export const withGoodRatingLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div style={{ position: "relative" }}>
        <span
          style={{
            position: "absolute",
            top: "8px",
            left: "8px",
            background: "gold",
            color: "black",
            padding: "2px 6px",
            borderRadius: "4px",
            fontSize: "12px",
            fontWeight: "bold",
          }}
        >
          ⭐ Good Rating
        </span>
        <RestaurantCard resData={props.resData} />
      </div>
    );
  };
};

export default RestaurantCard;
