import { useState } from "react";
const RecommendedCard = ({ recommendedRes }) => {
  const { itemCards, title } = recommendedRes;
  
  const [openIndex1, setOpenIndex1] = useState(1);
  const toggle2 = () => {
    openIndex1 == 1 ? setOpenIndex1(0) : setOpenIndex1(1);
  };
  return (
    <div className="w-[70%] mx-auto my-6">
      {/* Section title */}
      <button
        onClick={() => toggle2()}
        className="w-full text-left px-4 py-2 font-medium text-lg flex justify-between items-center font-bold"
      >
        {title}
        {/* <span>{openIndex === i ? "−" : "+"}</span> */}
      </button>
      {openIndex1 == 1 &&
        itemCards.map((item, i) => (
          <div key={i} className="mb-4 border rounded-lg shadow">
            <div className="flex justify-between gap-6 border-t p-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{item.card.info.name}</h3>
                <h3 className="text-green-600 font-medium">
                  Rs.{" "}
                  {(item.card.info.price || item.card.info.defaultPrice) / 100}
                </h3>
                <p className="text-gray-600">{item.card.info.description}</p>
              </div>
              <div className="w-32 h-32 flex-shrink-0">
                <img
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item.card.info.imageId}`}
                  alt={item.card.info.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
export default RecommendedCard;
