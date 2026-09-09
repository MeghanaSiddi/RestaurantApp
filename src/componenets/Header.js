import logo from '../../assets/images/logo.svg';
import { useState } from 'react';
const Header = () =>{
const [btnName,setbtnName]=useState("Login")

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
                    <li><button className='login' onClick={()=>btnName=="Login"?setbtnName("Logout"):setbtnName("Login")}>{btnName}</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;