import { API_URL } from "../utils/contants";
const RestaurantCard = (props) => {
 const { resData } = props;
  const {cloudinaryImageId,name,cuisines,avgRating,aggregatedDiscountInfoV3} = resData?.info;
  const price = aggregatedDiscountInfoV3?.subHeader;
  return (
    <div className="res-card">
      <img
        src={`${API_URL}${cloudinaryImageId}`}
        alt="Restaurant"
        className="res-image"
      />
      <div className="res-content">
        <h3 className="text-2xl font-bold">{name}</h3>
        <h5 className="res-rating">⭐ {avgRating}</h5>
        <h6 className="res-price">💰 {price}</h6>
        <p className="res-description">{cuisines.join(", ")}</p>
        <button className="res-btn">Order Now</button>
      </div>
    </div>
  );
};
// high order component
export const withGoodRatingLabel=(RestaruantCard)=>{
  return (props)=>{
    return(
      <div>
        <h1>Good Rating</h1>
        <RestaruantCard resData={props.resData}/>
      </div>
    )
  }
}
// input-resturantCard->resturantCardPromated
export default RestaurantCard;