import { useState } from "react";
import Accordion from "./Accordion";
const RecommendedCard = ({ recommendedRes }) => {
  console.log("rec", recommendedRes);
  //   const { itemCards, title } = recommendedRes;

  const [openIndex1, setOpenIndex1] = useState(0);
  const [index, setIndex] = useState();
  const toggle2 = (i) => {
    setIndex(i);
    openIndex1 == 1 ? setOpenIndex1(0) : setOpenIndex1(1);
  };
  return (
    <div className="w-[70%] mx-auto my-6">
      {recommendedRes.map((item, i) => (
        <div>
          <button
            onClick={() => toggle2(i)}
            className="w-full text-left px-4 py-2  text-lg flex justify-between items-center font-bold"
          >
            {item.card.card.title} {i}
            <span></span>
          </button>
          {/* show accordin data */}
          {index == i && (
            <Accordion
              key={i}
              itemCards={item.card.card.itemCards}
              openIndex1={openIndex1}
              index={index}
            />
          )}
        </div>
      ))}

      {/* Section title */}
    </div>
  );
};
export default RecommendedCard;
