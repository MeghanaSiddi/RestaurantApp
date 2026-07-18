import {CDN_URL} from "../utils/constants";

const RestaurantCard = (props) =>{
    console.log("ABC");
    console.log(props);
    let {name,cuisines,avgRating,sla,costForTwo,cloudinaryImageId}=props.resData.info;
    return (
        <div className="res-card">
            <img alt="res-logo" className="res-logo" src={CDN_URL+cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{sla.slaString}</h4>
            <h4>{costForTwo}</h4>
        </div>
    );
}

export default RestaurantCard;
