import styled from "styled-components";
import ShimmerCard from "./ShimmerCard";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import TopPickCard from "./TopPickCard";
import RecommendedCard from "./RecommendedCard";

const Tabs = styled.nav`
  display: flex;
  gap: 20px;
  border-bottom: 1px solid #e5e7eb;
  margin-bottom: 20px;

  .tab {
    padding: 12px 20px;
    font-weight: 600;
    cursor: pointer;
    border-bottom: 2px solid transparent;
  }
  .tab.active {
    border-color: black;
  }
`;

const Card = styled.section`
  background: #fff;
  margin: 20px;
  border-radius: 10px;
  padding: 16px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);

  .card-inner {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .rating-row {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 500;

    .rating-chip {
      display: flex;
      align-items: center;
      gap: 5px;
      background: #facc15;
      padding: 4px 8px;
      border-radius: 6px;
      font-size: 14px;
    }
    .meta {
      color: #6b7280;
      font-size: 14px;
    }
    .dot {
      color: #6b7280;
    }
  }

  .cuisines a {
    text-decoration: none;
    color: #eb2525ff;
    font-size: 15px;
  }

  .divider {
    height: 1px;
    background: #e5e7eb;
  }

  .timeline {
    display: flex;
    align-items: flex-start;
    gap: 10px;

    .tl-line {
      width: 20px;
      display: flex;
      justify-content: center;
      position: relative;

      .tl-dot {
        width: 8px;
        height: 8px;
        background: black;
        border-radius: 50%;
        position: absolute;
        top: 8px;
      }
    }

    .tl-item {
      display: flex;
      flex-direction: column;
      font-size: 14px;

      .tl-title {
        font-weight: 600;
      }

      .eta {
        font-size: 15px;
        font-weight: bold;
      }
    }

    details summary {
      cursor: pointer;
      list-style: none;
    }
    details summary::-webkit-details-marker {
      display: none;
    }
    .chev {
      margin-left: 6px;
      font-size: 12px;
    }
  }
`;

const TopPickWrapper = styled.section`
  margin: 30px 0;

  h1 {
    font-size: 24px;
    margin-left: 20px;
    font-weight: bold;
  }

  .scroll-container {
    width: 70%;
    margin: auto;
    display: flex;
    flex-direction: row;
    gap: 16px;
    padding: 20px;
    overflow-x: auto;
    scrollbar-width: none;
  }

  .scroll-container::-webkit-scrollbar {
    display: none;
  }

  .flex-item {
    flex-shrink: 0;
  }
`;

const ResturantMenuPage = () => {
  const { id } = useParams();
  const resInfo = useRestaurantMenu(id);

  if (!resInfo) {
    return <ShimmerCard />;
  }

  const data = resInfo?.data?.cards?.[2]?.card?.card?.info || {};
  const itemCards1 =
    resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  const recommendedArray = itemCards1.filter(
    (el) =>
      el.card.card["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  const topPick =
    resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card
      .card.carousel || [];

  return (
    <div>
      <Tabs aria-label="Menu">
        <div className="tab active">Order Online</div>
        <div className="tab">Dineout</div>
      </Tabs>

      <Card aria-label="Restaurant info">
        <div className="card-inner">
          <div className="rating-row">
            <span className="rating-chip">
              <svg viewBox="0 0 24 24" fill="currentColor" width="16">
                <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              {data.avgRating}
            </span>
            <span className="meta">{data.totalRatingsString}</span>
            <span className="dot">•</span>
            <span className="meta">{data.costForTwoMessage}</span>
          </div>

          <div className="cuisines">
            <a href="#">{data.name}</a>, <a href="#">Asian</a>
          </div>

          <div className="divider"></div>

          <div className="timeline">
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

            <div className="tl-line" style={{ position: "relative" }}>
              <span className="tl-dot" style={{ top: 0 }}></span>
            </div>
            <div className="tl-item">
              <div className="eta">{data?.sla?.slaString}</div>
            </div>
          </div>
        </div>
      </Card>

      <TopPickWrapper>
        <h1>Top Pick</h1>
        <div className="scroll-container">
          {topPick.map((res, index) => (
            <div key={index} className="flex-item">
              <TopPickCard topPickData={res} />
            </div>
          ))}
        </div>
      </TopPickWrapper>

      <RecommendedCard recommendedRes={recommendedArray} />
    </div>
  );
};

export default ResturantMenuPage;
