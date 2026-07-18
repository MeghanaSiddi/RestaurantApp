import React from "react";
import ReactDOM from "react-dom/client";
// import logo from '/assets/images/logo.svg';
import resList from "../data.json";
import Header from './componenets/Header';
import Body from './componenets/Body';



// https://namastedev.com/api/v1/listRestaurants
//  https://namastedev.com/api/v1/listRestaurantMenu/123456





console.log(resList);




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
