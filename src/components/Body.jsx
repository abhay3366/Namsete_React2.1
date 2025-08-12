import { useEffect, useState } from "react";
// import resList from "../utils/mockData";
import RestaurantCard from "./RestaruantCard";
import { API } from "../utils/contants";
import ShimmerCard from "./ShimmerCard";

const Body = () => {
  const [listofRestaurants, setlistofRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(API);
    const response = await data.json();
    setlistofRestaurants(
      response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  if (listofRestaurants.length == 0) {
    return <ShimmerCard />
  }

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            console.log(listofRestaurants);
            const filterData = listofRestaurants.filter(
              (res) => res.info.avgRating < 4.5
            );
            setlistofRestaurants(filterData);
          }}
        >
          Top Rated Resturant
        </button>
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
