const TopPickCard = ({ topPickData }) => {
  const { creativeId } = topPickData;
  //   const { name, description, price } = topPickData.dish.info;

  return (
    <div className=" w-full  flex items-center justify-center">
      <div className="relative rounded-2xl overflow-hidden  shadow-xl ring-1 ring-neutral-700/60 hover:shadow-2xl transition-all">
        <div className="relative aspect-[4/3]">
          <img
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/${creativeId}?`}
            alt="Korean Spicy Fries"
            className="w-full h-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default TopPickCard;
