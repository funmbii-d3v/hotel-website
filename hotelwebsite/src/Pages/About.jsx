import React from "react";
import { IoIosAlarm } from "react-icons/io";
import { FaWifi } from "react-icons/fa";
import { FaBath } from "react-icons/fa";
import { FaSpa } from "react-icons/fa";
import { GiCoffeeCup } from "react-icons/gi";
import { FaHelmetSafety } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import { FaShippingFast } from "react-icons/fa";
import { MdOutlineBedroomParent } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";
function About() {
  return (
    <React.Fragment>
      <div className="Maincnt">
        <div className="container1">
          <h1 className="head1"> Step Into Comfort</h1>
          <button className="btn1">Explore More</button>
          <div className="links"></div>
        </div>
        <div className="containers1">
          <div className="ctop">
            <p>Welcome To Our About Page</p>
            <h1>L'Hotel B'n'B Amenities</h1>
            <p>
             Welcome to a boutique hospitality experience where timeless elegance meets modern comfort. <br /> Our meticulously designed spaces are curated to offer an brauthentic home-away-from-home atmosphere, <br /> tailored for travelers seeking both relaxation and refined local charm.
            </p>
          </div>
          <div className="cbottom">
            <div className="b1">
              <h1>
                <IoIosAlarm />
              </h1>
              <h3>Alarm</h3>
            </div>
            <div className="b2">
              <h1>
                <FaWifi />
              </h1>
              <h3>Fast Wifi</h3>
            </div>
            <div className="b3">
              <h1><FaBath /></h1>
              <h3>Bath</h3>
            </div>
            <div className="b4">
              <h1><FaSpa /></h1>
              <h3>Spa</h3>
            </div>
            <div className="b5">
              <h1><GiCoffeeCup /></h1>
              <h3>Coffee</h3>
            </div>
            <div className="b6">
              <h1><FaHelmetSafety /></h1>
              <h3>Safe</h3>
            </div>
          </div>
        </div>

        <div className="container2">
          <div className="leftcont1">
            <div className="box1">
              <img src="" alt="" />
            </div>
            <div className="box2"></div>
          </div>
          <div className="rightcont1">
            <div className="box3">
              <h3 className="bh3">Brief On L'Hotel</h3>
              <h1 className="bh1">Enjoy A Luxury Experience</h1>
              <p className="bp">
                {" "}
                Experience an unmatched level of comfort and timeless charm. From thoughtfully appointed suites to exceptional hospitality, 
              </p>
              <h5 className="bh5">
                {" "}
                L'Hotel B'n'B redefines {" "}
                <span className="spann">your travel experience.</span>
              </h5>
            </div>
            <div className="box4"></div>
          </div>
        </div>
        <div className="container3">
          <div className="top1">
            <h4>Feautures</h4>
            <h1>Why Choose Us</h1>
          </div>
          <div className="bottom1">
            <div className="c1">
              <div className="boxx"><h1><FaShippingFast /></h1></div>
              <h2>Fast & Easy Booking</h2>
              <h4>Seamless</h4>
              <p>
                Instant free-text or cloud booking <br /> NO Stress Or Labour On
                Cloud Servers <br /> Get Your form from front to back
              </p>
            </div>
            <div className="c2">
              <div className="boxx1"><h1><MdOutlineBedroomParent /></h1></div>
              <h2>Room Booking</h2>
              <h4>____</h4>
              <p>
                Pick your ideal room, tap to reserve, and leave the logistics to us. Enjoy an entirely stress-free booking experience backed by ultra-reliable cloud servers.
              </p>
            </div>
            <div className="c3">
              <div className="boxx2"><h1><IoLocation /></h1></div>
              <h2>Picked Best Location</h2>
              <h4>____</h4>
              <p>
                Pick the best spot on the map and let our cloud handle the rest—zero server maintenance, zero booking friction, 100% seamless hospitality.
              </p>
            </div>
            <div className="c4">
              <div className="boxx3"><h1><MdOutlinePayment /></h1></div>
              <h2>Easy payment &</h2>
              <h4> Cancel</h4>
              <p>
                Pay your way in seconds. Enjoy instant, secure transactions with zero processing stress and absolute peace of mind.
              </p>
            </div>
          </div>
        </div>
        <div className="container4"></div>
        <div className="container5"></div>
      </div>
    </React.Fragment>
  );
}

export default About;
