import { useEffect, useState } from "react";
const useRestaurantMenu = (id) => {
  const [resInfo, setRestInfo] = useState(null);


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
  return resInfo;
};
export default useRestaurantMenu;
