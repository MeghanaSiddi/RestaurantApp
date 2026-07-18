import resList from "../../data.json";
import RestaurantCard from "./RestaurantCard";
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList?.gridElements?.infoWithStyle.restaurants.map((restaurant) => (
          <RestaurantCard resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
