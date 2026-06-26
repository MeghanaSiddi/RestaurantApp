import React from "react";
import ReactDOM from "react-dom/client";
import logo from '/assets/images/logo.svg';
import resList from "./data.json";


// https://namastedev.com/api/v1/listRestaurants
//  https://namastedev.com/api/v1/listRestaurantMenu/123456

/**
 * Header
 * -- Logo
 * -- Nav Items
 * Body
 * -- Search
 * -- RestaurantContainer
 *    --RestaurantCard
* Footer  
 *--Copyright
 *--Links
 *--Address
 *--Contact
*/

const Header = () =>{
    return(
        <div className="header">
            <div className="logo-container">
                <img src={logo} alt="Meghana Food Delivery" className="logo"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

console.log(resList);

const RestaurantCard = (props) =>{
    console.log("ABC");
    console.log(props);
    let {name,cuisines,avgRating,sla,costForTwo,cloudinaryImageId}=props.resData.info;
    return (
        <div className="res-card">
            <img alt="res-logo" className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{sla.slaString}</h4>
            <h4>{costForTwo}</h4>
        </div>
    );
}

const Body = () =>{
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {resList?.gridElements?.infoWithStyle.restaurants.map((restaurant)=>(
                    <RestaurantCard resData={restaurant}/> 
                ))

                }
                                            
            </div>
        </div>
    )
}

const AppLayout = () =>{
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));



root.render(<AppLayout />);
