import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [restaurant, setRestaurant] = useState(null);

  async function getRestaurantInfo() {
    const data = await fetch(" " + resId);
    const json = await data.json();
    setRestaurant(json?.data);
  }
  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className='menu'>
      <div>
        <h1> Restaurant id: {resId}</h1>
        <h1> Restaurant name: {restaurant?.name}</h1>
        <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
        <h2>{restaurant?.area}</h2>
        <h2>{restaurant?.city}</h2>
        <h2>{restaurant?.avgRating} stars</h2>
        <h2>{restaurant?.costForTwoMsg}</h2>
      </div>
      <div>
        <h1> Menu </h1>
        <ul>
          {Object.values(restaurant?.items).map((item) => (
            <li key={item?.id}> {item?.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;
