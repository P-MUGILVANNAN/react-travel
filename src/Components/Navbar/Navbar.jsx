import React, { useState } from "react";
import "./Navbar.css";
// import logo from "../../assets/Mugil.jpg";
import app from "../firebase.config"

// Imported Icons
import { AiFillCloseCircle } from "react-icons/ai";
import { PiDotsNineBold } from "react-icons/pi";
import { getAuth, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";


const Navbar = () => {

  const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const handleLogin=()=>{
        signInWithPopup(auth, googleProvider)
        .then((result) => {
         
          const user = result.user;
          window.location.replace("/");
          
        }).catch((error) => {
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
    }
// State to track and update navbar
  const [navBar, setNavBar] = useState('menu');

// Function to show navbar
  const showNavBar = () => {
    setNavBar('menu showNavbar');
  }

// Functio to remove navbar
  const removeNavBar = () => {
    setNavBar('menu');
  }

  return (
    <div className="navBar">
      <div className="logoDiv">
        {/* <a href="#"><img className="h-logo" src="" alt=" " /></a> */}
      </div>

      <div className={navBar}>
        <ul>
          <a href="#destination"><li className="navList">Destinations</li></a> 
          <a href="#aboutUs"><li className="navList">About Us</li></a> 
          <a href="#testimonial"><li className="navList">Testimonial</li></a> 
          <a href="#faq"><li className="navList">FAQ</li></a> 
        </ul>
        {/* icon to remove navbar */}
        <AiFillCloseCircle className="icon closeIcon" onClick={removeNavBar} />
      </div>
     
      <button onClick={handleLogin} className="signUpBtn btn">Sign Up</button>
      
      {/* icon to toggle navbar */}
      <PiDotsNineBold className="icon menuIcon" onClick={showNavBar} />
    </div>
  );
};

export default Navbar;
