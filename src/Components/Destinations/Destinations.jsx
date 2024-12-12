import React, {useEffect} from "react";
import "./Destinations.css";

// imported icons
import { MdLocationPin } from "react-icons/md";
import { BsFillCreditCardFill } from "react-icons/bs";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { TiLocation } from "react-icons/ti";

//Imported images
import image1 from "../../assets/marina-beach.jpg"
import image2 from "../../assets/Mahabalipuram-resized.avif"
import image3 from "../../assets/Thanjavur-resized.avif"
import image4 from "../../assets/Coimbatore-resized.avif"
import image5 from "../../assets/guindy-national-park.jpg";
import image6 from "../../assets/ooty-lake.jpg";
import image7 from "../../assets/the-misty-lake.jpg";
import image8 from "../../assets/pichavaram-mangrove-forest.jpg";

import Aos from 'aos'
import 'aos/dist/aos.css'

// lets create an array that is gonna contain all the destination data and we loop through them
const destinations = [
  {
    id: 1,
    image: image1,
    name: "Marina Beach",
    location: "Chennai",
    rating: 4.9,
  },
  {
    id: 2,
    image: image2,
    name: "Mahabalipuram",
    location: "Chengalpet",
    rating: 4.8,
  },
  {
    id: 3,
    image: image3,
    name: "Chola Temple",
    location: "Tanjore",
    rating: 4.6,
  },
  {
    id: 4,
    image: image4,
    name: "Esha Temple",
    location: "Coimbatore",
    rating: 4.5,
  },
  {
    id: 5,
    image: image5,
    name: "National Park",
    location: "Guindy",
    rating: 4.8,
  },
  {
    id: 6,
    image: image6,
    name: "Lake",
    location: "Ooty",
    rating: 4.4,
  },
  {
    id: 7,
    image: image7,
    name: "The misty lake",
    location: "Kodaikanal",
    rating: 4.5,
  },
  {
    id: 8,
    image: image8,
    name: "Mangroove forest",
    location: "Pichavaram",
    rating: 4.2,
  },
];

const Destinations = () => {

  useEffect(() => {
    Aos.init({duration: 1000})
  },[])

  return (
    <div className="destination section container" id="destination">
      <div className="secContainer">
        <div className="secTitle">
          <span className="redText" data-aos='fade-up'>EXPLORE NOW</span>
          <h3 data-aos='fade-up'>Find Your Dream Destination</h3>
          <p data-aos='fade-up'>
            Fill in the fields below to find the best spot for your next tour.
          </p>
        </div>

        <div className="searchField grid">
          <div className="inputField flex" data-aos='fade-up'>
            <MdLocationPin className="icon" />
            <input type="text" name="" id="" placeholder="Location" />
          </div>

          <div className="inputField flex" data-aos='fade-up'>
            <BsFillCreditCardFill className="icon" />
            <input type="text" name="" id="" placeholder="Budget" />
          </div>

          <div className="inputField flex" data-aos='fade-up'>
            <BsFillCalendarDateFill className="icon" />
            <input type="text" name="" id="" placeholder="Date" />
          </div>

          <button className="btn flex" data-aos='fade-up'>
            <BiSearchAlt className="search-icon icon" />
            Search
          </button>
        </div>

        <div className="secMenu">
          <ul className="flex" data-aos='fade-up'>
            <li className="active">All</li>
            <li>Recommended</li>
            <li>Beach</li>
            <li>Park</li>
            <li>Nature</li>
            <li>Mountain</li>
          </ul>
        </div>

        <div className="destContainer grid">
          {destinations.map((destination) => {
            return (
              <div className="singleDestination" key={destination.id} data-aos='fade-up'>
                <div className="imgDiv" data-aos='fade-up'>
                  <img src={destination.image} alt="Destination Image" />

                  <div className="descInfo flex">
                    <div className="text">
                      <span className="name">{destination.name}</span>
                      <p className="flex">
                        <TiLocation className="icon" />
                        {destination.location}
                      </p>
                    </div>

                    <span className="rating">{destination.rating}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
