import { useState } from "react";
import resList from "../utils/mockData";
import RestaurantCard from "./RestaruantCard";


const Body = () => {
  const [listofRestaurants,setlistofRestaurants] = useState(resList);
  return (
    <div className="body">
      <div className="filter">
          <button className="filter-btn" onClick={()=>{
            console.log(listofRestaurants)
            const filterData=listofRestaurants.filter(
              (res)=>res.info.avgRating<4.5)
              setlistofRestaurants(filterData)
            }}
          >
          Top Rated Resturant</button>
      </div>
      <div className="res-container">
        {listofRestaurants.map((res, index) => (
          <RestaurantCard key={index} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;