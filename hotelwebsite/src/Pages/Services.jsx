

import React from "react";
import {
  FaSpa,
  FaUtensils,
  FaPersonSwimming,
  FaCar,
  FaDumbbell,
  FaBellConcierge,
  FaWifi,
  FaMugHot,
  FaArrowRight,
} from "react-icons/fa6";

import spaImg from "../assets/image/spa.jpeg";
import dinnerImg from "../assets/image/dinner.jpeg";
import poolImg from "../assets/image/pool.jpeg";
import hotelImg from "../assets/image/Dream.jpeg";
import openingImg from "../assets/image/openingimage.jpg";



const Services = () => {
  const services = [
    {
      icon: <FaBellConcierge />,
      title: "24/7 Concierge",
      text: "Our friendly concierge team is always available to help with recommendations, reservations and anything you need during your stay.",
    },
    {
      icon: <FaSpa />,
      title: "Spa & Wellness",
      text: "Relax, refresh and recharge with calming treatments designed to help you leave feeling your very best.",
    },
    {
      icon: <FaUtensils />,
      title: "Fine Dining",
      text: "Enjoy delicious meals prepared with care, from relaxed breakfasts to memorable dinners in a beautiful setting.",
    },
    {
      icon: <FaPersonSwimming />,
      title: "Swimming Pool",
      text: "Take a refreshing swim or simply unwind beside our pool and enjoy a peaceful break from the city.",
    },
    {
      icon: <FaCar />,
      title: "Airport Transfers",
      text: "Make your arrival and departure easier with our convenient airport transfer service, available upon request.",
    },
    {
      icon: <FaDumbbell />,
      title: "Fitness Centre",
      text: "Keep up with your routine in our comfortable fitness space, equipped for everything from light workouts to training.",
    },
    {
      icon: <FaWifi />,
      title: "Complimentary Wi-Fi",
      text: "Stay connected throughout your visit with reliable complimentary Wi-Fi available across the hotel.",
    },
    {
      icon: <FaMugHot />,
      title: "Breakfast Service",
      text: "Start your morning with freshly prepared favourites, hot coffee and everything you need for a great day ahead.",
    },
  ];

  return (
    <main className="servicesPage">

      {/* HERO */}
      <section className="servicesHero">
        <img src={hotelImg} alt="L'Hòtel Luxury Resort" />

        <div className="servicesHeroOverlay">
          <p>EXPERIENCE L'HÒTEL</p>
          <h1>Our Services</h1>
          <span>
            Everything you need for a comfortable,
            <br />
            relaxing and memorable stay.
          </span>
        </div>
      </section>

      {/* INTRO */}
      <section className="servicesIntro">
        <div className="servicesIntroText">
          <p className="servicesTitle">OUR SERVICES</p>

          <h2>
            Comfort is in the
            <br />
            <span>little things.</span>
          </h2>

          <p className="introDescription">
            At L'Hòtel, we believe a great stay is about more than
            beautiful rooms. From the moment you arrive, our team is
            here to make your experience easy, comfortable and
            unforgettable.
          </p>
        </div>
      </section>

      {/* FEATURED SERVICES */}
      <section className="featuredServices">

        <div className="featuredImage">
          <img src={spaImg} alt="Spa at L'Hòtel" />
        </div>

        <div className="featuredText">
          <p className="servicesTitle">RELAX & UNWIND</p>

          <h2>
            Take some time
            <br />
            <span>for yourself.</span>
          </h2>

          <p>
            Step away from the busy city and enjoy a little time to
            yourself. Our spa and wellness services are designed to
            help you relax, recharge and feel completely at ease.
          </p>

          <button className="serviceBtn">
            Explore our spa <FaArrowRight />
          </button>
        </div>

      </section>

   
      <section className="allServices">

        <div className="serviceHeading">
          <p className="servicesTitle">AT YOUR SERVICE</p>

          <h2>
            Made for your
            <br />
            <span>comfort.</span>
          </h2>

          <p>
            Whatever brings you to L'Hòtel, we've got the details
            covered.
          </p>
        </div>

        <div className="servicesGrid">

          {services.map((service, index) => (
            <div className="serviceCard" key={index}>

              <div className="serviceIcon">
                {service.icon}
              </div>

              <div className="serviceCardNumber">
                0{index + 1}
              </div>

              <h3>{service.title}</h3>

              <p>{service.text}</p>

              {/* <button className="serviceLink">
                Learn more <FaArrowRight />
              </button> */}

            </div>
          ))}

        </div>

      </section>

      {/* DINING / POOL SECTION */}
      <section className="serviceExperiences">

        <div
          className="experienceBox"
          style={{ backgroundImage: `url(${dinnerImg})` }}
        >
          <div>
            <FaUtensils />
            <h2>Good food.</h2>
            <p>
              Delicious dining and memorable moments around the table.
            </p>
          </div>
        </div>

        <div
          className="experienceBox"
          style={{ backgroundImage: `url(${poolImg})` }}
        >
          <div>
            <FaPersonSwimming />
            <h2>Take a dip.</h2>
            <p>
              Slow down, cool off and enjoy a little sunshine.
            </p>
          </div>
        </div>

      </section>

      {/* CTA */}
      <section className="serviceCTA">

        <div
          className="serviceCTABg"
          style={{ backgroundImage: `url(${openingImg})` }}
        />

        <div className="serviceCTAContent">
          <p>YOUR STAY STARTS HERE</p>

          <h2>
            Come for the
            <br />
            <span>experience.</span>
          </h2>

          <p className="ctaText">
            Whether you're visiting for business or simply getting
            away, L'Hòtel is ready to welcome you.
          </p>

          <button className="ctaButton">
            Book Your Stay <FaArrowRight />
          </button>
          
        </div>

      </section>

    </main>
  );
};

export default Services;
