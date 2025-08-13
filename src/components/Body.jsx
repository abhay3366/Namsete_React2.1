import { useEffect, useState } from "react";
// import resList from "../utils/mockData";
import RestaurantCard from "./RestaruantCard";
import { API } from "../utils/contants";
import ShimmerCard from "./ShimmerCard";

const Body = () => {
  const [listofRestaurants, setlistofRestaurants] = useState([]);
  const [searchData, setsearchData] = useState("");
  const [filterResturant, setfilterResturant] = useState([]);

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
    setfilterResturant(
      response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    ); // Show all initially
  };

  if (listofRestaurants.length == 0) {
    return <ShimmerCard />;
  }

  return (
    <div className="body">
      <div
        className="filter"
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "5px 10px",
        }}
      >
        <div className="search">
          <input
            type="text"
            name="search"
            value={searchData}
            onChange={(e) => {
              const value = e.target.value;
              setsearchData(value); // update state

              if (value.trim() === "") {
                setfilterResturant(listofRestaurants);
                return;
              } else {
                const filteredDataRestuarnt = listofRestaurants.filter(
                  (res) => {
                    return res.info.name
                      .toLowerCase()
                      .includes(value.toLowerCase());
                  }
                );

                setfilterResturant(filteredDataRestuarnt);
              }
            }}
            className="search-box"
            id=""
            style={{ lineHeight: "15px" }}
          />
          &nbsp;
          {/* <button
            onClick={(e) => {
              setsearchData(e.target.value);
              const filteredDataRestuarnt = listofRestaurants.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchData.toLowerCase());
              });

              setfilterResturant(filteredDataRestuarnt);
            }}
          >
            Search
          </button> */}
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filterData = listofRestaurants.filter(
              (res) => {
                console.log(res)
                return res.info.avgRating > 4.5
              }
            );
            console.log(filterData)
            setfilterResturant(filterData);
          }}
        >
          Top Rated Resturant
        </button>
      </div>
      <div className="res-container">
        {filterResturant.map((res, index) => (
          <RestaurantCard key={index} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
