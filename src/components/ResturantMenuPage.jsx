import ShimmerCard from "./ShimmerCard";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import TopPickCard from "./TopPickCard";
import RecommendedCard from "./RecommendedCard";

const ResturantMenuPage = () => {
  const { id } = useParams(); // 'id' comes from the :id in your route path

  const resInfo = useRestaurantMenu(id);
  //

  // Show shimmer while loading
  if (!resInfo) {
    return <ShimmerCard />;
  }

  const data = resInfo?.data?.cards?.[2]?.card?.card?.info || {};
  const itemCards =
    resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]
      ?.card?.card?.itemCards || [];

  const itemCards1 =
    resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
  // console.log("itemCards1",itemCards1)

  const recommendedArray = itemCards1.filter(
    (el) => el.card.card.title == "Recommended"
  );
  // console.log("recommendedArray", recommendedArray[0].card.card.itemCards);

  const topPick =
    resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card
      .card.carousel || [];
  //
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
            <a href="#">{data.name}</a>, <a href="#">Asian</a>
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
      {/* //---------------------------Top Pick ------------------------------------ */}
      <section>
        <h1 className="text-3xl pl-5">Top Pick</h1>
        <div
          className="w-[70%] mx-auto flex flex-row gap-6 p-6 h-full overflow-x-auto no-scrollbar"
          style={{ margin: "auto" }}
        >
          {topPick.map((res, index) => (
            <div key={index} className="flex-shrink-0">
              <TopPickCard topPickData={res} />
            </div>
          ))}
        </div>
      </section>

      {/* // ------------------------------------End top pick------------------------------ */}

      {/*-----------------------------------------Recommended------------------------------------- */}
      {/* {recommendedArray[0].card.card.map((response, index) => ( */}
        <RecommendedCard  recommendedRes={recommendedArray[0].card.card} />
      {/* ))} */}
      {/*-----------------------------------------End Recommended------------------------------------- */}
    </div>
  );
};

export default ResturantMenuPage;
