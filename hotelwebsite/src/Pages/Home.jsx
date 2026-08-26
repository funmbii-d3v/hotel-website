import React from "react";
import { useNavigate } from "react-router-dom";
import { FaLocationDot, FaBath, FaUsersLine, FaSackDollar } from "react-icons/fa6";
import { FaUserTie, FaSistrix, FaPen, FaList } from "react-icons/fa6";
import firstImg from "../assets/image/hero1.jpg";
import scndImg from "../assets/image/one.jfif"
import thirdImg from "../assets/image/three.jfif"
const Home = () => {
  const navigate= useNavigate()
  const goToAbout=()=>{
    navigate('/about')
  }
  return (
    <React.Fragment>
      <main>
        <div className="hero">
          <img src={firstImg} className="heroPg" />
          <div className="heroContent">
            <div className="stars">
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
            </div>
            <h1>L'Hòtel Luxury Resort</h1>
            <p>
              Located in the heart of the city, this luxurious, modern hotel
              offers top-notch amenities for a perfect stay.
            </p>
          </div>
        </div>
        <section className="desc">
          <div>
            <FaLocationDot className="icon"/>
            <h3>Located in the heart of the city</h3>
            <p>
              Ideally located in the city's heart for easy access and
              convenience.
            </p>
          </div>
          <div>
            <FaBath className="icon"/>
            <h3>Luxurious, modern, and comfortable</h3>
            <p>
              Experience a luxurious, mordern, and fully equipped space for
              comfort.
            </p>
          </div>
          <div>
            <FaUsersLine className="icon"/>
            <h3>Friendly and welcoming staff</h3>
            <p>
              Our friendly and welcoming staff ensure a delightful stay every
              time.
            </p>
          </div>
          <div>
            <FaSackDollar className="icon"/>
            <h3>Best prices and great offers</h3>
            <p>
              Enjoy unbeatable prices with fantasic offers tailored for you.
            </p>
          </div>
        </section>
        <hr />
        <section className="wlcm">
          <div className="imgCon">
            <img src={scndImg} className="scnd" />
            <img src={thirdImg} />
          </div>
          <div className="side">
            <p className="ttl">Welcome to L'Hòtel</p>
            <h1>Luxury Hotel in the heart of the city.</h1>
            <p>L'Hòtel offers over 200 mordern, luxurious rooms. Enjoy premium facilites, perfect for relaxation and indulgence. Our friendly staff ensures a seamless, personalized experience, with stunning city views. Discover true luxury and hospitality at L'Hòtel.</p>
            <button className="aboutbtn" onClick={goToAbout}>Read More →</button>
          </div>
        </section>
        <section>
          <h1 className="h1">Our Approach</h1>
        <div className="approach">
          <div className="appBox">
            <FaUserTie className="icon"/>
            <h3>Listen</h3>
            <p>We learn about your vision, guests, and operational needs.</p>
          </div>
          <div className="appBox">
            <FaSistrix className="icon"/>
            <h3>Assess</h3>
            <p>We review the space, brand, and guest experience.</p>
          </div>
          <div className="appBox">
            <FaPen className="icon"/>
            <h3>Plan</h3>
            <p>We shape options across design, flow, and amenities.</p>
          </div>
          <div className="appBox">
            <FaList className="icon"/>
            <h3>Guide</h3>
            <p>We coordinate deliverables and next stops.</p>
          </div>
        </div>
        </section>
        <section>
          <div className="map">
            <div className="info">
              <h4>Our Location <FaLocationDot/></h4>
              <h2>Getting Here</h2>
              <h1>L'Hòtel Luxury Resort</h1>
              <p>11, Airport Road, Ajao Estate, Lagos, Nigeria.</p>
              <p>From Muritala Mohammed International airport, hail a cab to this location.</p>
            </div>
            <div className="lcT">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.7576070325526!2d3.3320076!3d6.5522566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8e0e91e88543%3A0xcf9e9501c4b84e44!2s11%20Adeyemo%20St%2C%20Airport%20Rd%2C%20Oshodi-Isolo%2C%20Lagos%20102214%2C%20Lagos!5e0!3m2!1sen!2sng!4v1787784426013!5m2!1sen!2sng" allowFullScreen="" loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe>
            </div>
          </div>
          <div className="line"></div>
        </section>
      </main>
    </React.Fragment>
  );
};

export default Home;