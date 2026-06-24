import React from "react";
import ReactDOM from "react-dom/client";
import logo from '/assets/images/logo.svg';

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

const RestaurantCard = (props) =>{
    let {resName,cuisine}=props;
    return (
        <div className="res-card">
            <img alt="res-logo" className="res-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdThf2eFWvlgxhqa6bzB4OZ2vUz1o4ric9mv9YLV01jA&s=10"/>
            <h3>{resName}</h3>
            <h4>{cuisine}</h4>
            <h4>4.4 stars</h4>
            <h4>34 mins</h4>
        </div>
    );
}

const Body = () =>{
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard resName="Meghana Foods" cuisine="Biryani, North Indian, Asian"/>
                <RestaurantCard resName="KFC" cuisine="Burger, Fast Food"/>             
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
