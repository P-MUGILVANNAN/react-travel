import React, { useEffect } from "react";
import "./Footer.css";

import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="footer">
      <div className="secContainer container grid">
        <div className="logoDiv">
          <div className="footerLogo" data-aos="fade-up">
            
          </div>
          <div className="socials flex" data-aos="fade-up">
            <a href="https://www.linkedin.com/in/mugilvannan-p-215559266/" target="_blank">
              <FaLinkedinIn className="icon" />
            </a>
            <a href="https://twitter.com/mugilvannan2323" target="_blank">
              <FaTwitter className="icon" />
            </a>
          </div>
        </div>

        <div className="footerLinks" data-aos="fade-up">
          <span className="linkTitle">Information</span>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Explore</a>
          </li>
          <li>
            <a href="#destination">Travel</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </div>

        <div className="footerLinks" data-aos="fade-up">
          <span className="linkTitle">Helpful Links</span>
          <li>
            <a href="#destination">Destinations</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">Travel & Condition</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
        </div>

        <div className="footerLinks" data-aos="fade-up">
          <span className="linkTitle">Contact Details</span>
          <span className="email">mugilvannanpichai02@gmail.com</span>
          <span className="email">+91 8940668116</span>
        </div>
      </div>
      <div className="flex">
        <div className="copyright">
          <span>
            Copyright &copy; 2024 This Webpage is designed and
            developed by
            <a
              href="https://www.linkedin.com/in/mugilvannan-p-215559266/"
              target="_blank"
              className="owner"
            >
              <span> Mugilvannan </span>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
