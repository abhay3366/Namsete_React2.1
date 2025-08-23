import { useEffect, useState } from "react";
import RestaurantCard, { withGoodRatingLabel } from "./RestaruantCard";
import { API } from "../utils/contants";
import ShimmerCard from "./ShimmerCard";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import NotConnectedInternet from "./NotConnectedInternet";
import styled from "styled-components";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";

// Styled components
const BodyDiv = styled.div`
  &.body {
    padding: 10px;
  }
`;

const FilterDiv = styled.div`
  &.filter {
    display: flex;
    justify-content: space-between;
    margin: 5px 10px;

    @media (max-width: 600px) {
      flex-direction: column;
      align-items: stretch;
      gap: 10px;
    }
  }

  .search-box {
    line-height: 15px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 250px;

    @media (max-width: 600px) {
      width: 100%; /* Full width on small screens */
    }
  }

  .filter-btn {
    padding: 8px 14px;
    border: none;
    background-color: #4caf50;
    color: white;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;

    &:hover {
      background-color: #45a049;
    }

    @media (max-width: 600px) {
      width: 100%; /* Full width button on small screens */
    }
  }
`;

const ResContainer = styled.div`
  &.res-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 15px;
    margin-top: 20px;
  }
`;

const Body = () => {
  const [listofRestaurants, setlistofRestaurants] = useState([]);
  const [searchData, setsearchData] = useState("");
  const [filterResturant, setfilterResturant] = useState([]);
  const onlineStatus = useOnlineStatus();

  const ResturantGoodRating = withGoodRatingLabel(RestaurantCard);

 

  useEffect(() => {
    if (onlineStatus === true) {
      fetchData();
    }
  }, [onlineStatus]);

  const fetchData = async () => {
    const data = await fetch(API);
    const response = await data.json();
    const restaurants =
      response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];
    setlistofRestaurants(restaurants);
    setfilterResturant(restaurants);
  };

  if (!onlineStatus) {
    return <NotConnectedInternet />;
  }

  if (listofRestaurants.length === 0) {
    return <ShimmerCard />;
  }

  return (
    <BodyDiv className="body">
      <FilterDiv className="filter">
        <div className="search">
          <input
            type="text"
            name="search"
            placeholder="Search"
            value={searchData}
            onChange={(e) => {
              const value = e.target.value;
              setsearchData(value);

              if (value.trim() === "") {
                setfilterResturant(listofRestaurants);
              } else {
                const filteredDataRestuarnt = listofRestaurants.filter((res) =>
                  res.info.name.toLowerCase().includes(value.toLowerCase())
                );
                setfilterResturant(filteredDataRestuarnt);
              }
            }}
            className="search-box"
          />
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filterData = listofRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setfilterResturant(filterData);
          }}
        >
          Top Rated Resturant
        </button>
      </FilterDiv>

      <ResContainer className="res-container">
        {filterResturant.map((res, index) => (
          <Link to={"/restaurant/" + res.info.id} key={res.info.id || index}>
            {res.info.avgRating > 4.4 ? (
              <ResturantGoodRating resData={res} />
            ) : (
              <RestaurantCard resData={res} />
            )}
          </Link>
        ))}
      </ResContainer>
    </BodyDiv>
  );
};

export default Body;
