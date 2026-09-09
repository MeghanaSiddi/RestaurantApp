import resList from "../../data.json";
import RestaurantCard from "./RestaurantCard";
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  
  // const [listOfRestaurants,setListOfRestaurants]=useState(resList?.gridElements?.infoWithStyle.restaurants)

  const [listOfRestaurants,setListOfRestaurants]=useState([]);
  const [filteredListRestaurants,setfilteredListRestaurants]=useState([]);
  const [searchText,setSearchText]=useState("");

  useEffect(()=>{
    fetchData();
  },[])

  const fetchData=async ()=>{
    //const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4358411&lng=78.3467857&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const data=await fetch("https://corsproxy.io/?key=webdemo1&url=https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D17.4358411%26lng%3D78.3467857%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING");
    const json=await data.json();
    console.log("Hi!!!!!");
    console.log(json);
    setListOfRestaurants(json?.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants)
    setfilteredListRestaurants(json?.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  // if(listOfRestaurants.length==0){
  //   return <h1>Loading!..</h1>
  // }


  //conditional rendering
  // if(listOfRestaurants.length==0){
  //   return <Shimmer/>;
  // }
  

  return listOfRestaurants.length==0?(<Shimmer/>):(
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
          <button onClick={()=>{           
          const filteredRestaurants = listOfRestaurants.filter((res)=>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            )
            setfilteredListRestaurants(filteredRestaurants);
          }}>search</button>
        </div>
        <button
        className="filter-btn"
        onClick={()=>{
          const filteredList=listOfRestaurants.filter((res)=>
            res.info.avgRating>4
          );
            setfilteredListRestaurants(filteredList);
        }}>
          Top Rated Restaurants
        </button></div>
      <div className="res-container">
        {filteredListRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
