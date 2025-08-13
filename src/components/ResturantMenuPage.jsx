import React, { useEffect, useState } from "react";
import ShimmerCard from "./ShimmerCard";
import { useParams } from "react-router-dom";

const ResturantMenuPage = () => {
  const [resInfo, setRestInfo] = useState(null);
  const { id } = useParams(); // 'id' comes from the :id in your route path

  console.log("Restaurant ID:", id);

  useEffect(() => {
    if (id) {
      fetchData();
    }
  }, [id]);

  const fetchData = async () => {
    try {
      const res = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9939369&lng=77.5980282&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
      );
      const response = await res.json();
      setRestInfo(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Show shimmer while loading
  if (!resInfo) {
    return <ShimmerCard />;
  }

  const data = resInfo?.data?.cards?.[2]?.card?.card?.info || {};
  const itemCards =
    resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]
      ?.card?.card?.itemCards || [];

  return (
    <div>
      <nav className="tabs" aria-label="Menu">
        <div className="tab active">Order Online</div>
        <div className="tab">Dineout</div>
      </nav>

      <section className="card1" aria-label="Restaurant info">
        <div className="card-inner">
          {/* Rating row */}
          <div className="rating-row">
            <span className="rating-chip">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              {data.avgRating}
            </span>
            <span className="meta">{data.totalRatingsString}</span>
            <span className="dot">•</span>
            <span className="meta">{data.costForTwoMessage}</span>
          </div>

          {/* Cuisines */}
          <div className="cuisines">
            <a href="#">{data.name}</a>
            , <a href="#">Asian</a>
          </div>

          <div className="divider"></div>

          {/* Timeline */}
          <div className="timeline">
            {/* Outlet */}
            <div className="tl-line">
              <span className="tl-dot"></span>
            </div>
            <div className="tl-item">
              <span className="tl-title">Outlet</span>
              <details className="outlet">
                <summary>
                  {data.areaName}
                  <span className="chev">▾</span>
                </summary>
                <ul style={{ margin: "10px 0 0 0", paddingLeft: "16px" }}>
                  <li>Malleshwaram</li>
                  <li>Indiranagar</li>
                  <li>Koramangala</li>
                </ul>
              </details>
            </div>

            {/* ETA */}
            <div className="tl-line" style={{ position: "relative" }}>
              <span className="tl-dot" style={{ top: 0 }}></span>
            </div>
            <div className="tl-item">
              <div className="eta">{data?.sla?.slaString}</div>
            </div>
          </div>
        </div>
      </section>

      <hr />

      {itemCards.map((el, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            border: "1px solid red",
            width: "60%",
            margin: "auto",
          }}
        >
          <div>
            <h3>{el.card.info.name}</h3>
            <h3>Rs. {(el.card.info.price || el.card.info.defaultPrice) / 100}</h3>
            <p>{el.card.info.description}</p>
          </div>
          <div>
            <img
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${el.card.info.imageId}`}
              alt={el.card.info.name}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResturantMenuPage;
