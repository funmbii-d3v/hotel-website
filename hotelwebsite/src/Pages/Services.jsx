import React from "react";
import { useState } from "react";

function Services() {
  return (
    <React.Fragment>
      <section className="SvxSec1">
        <div className="svxLand">
          <h2>OUR SERVICES </h2>
          <p>
            At L'hótel, we believe a memorable stay is about more than a
            beautiful room. From delicious dining and relaxing wellness
            experiences to convenient guest services, everything is thoughtfully
            designed around your comfort.
          </p>
          <button>Book Your Stay</button>
        </div>
      </section>

      <section className="SvxSec2">
        <h2>OUR SERVICES</h2>
        <p> Designed for your comfort</p>
        <div className="bocc">
          <div className="bocc1"></div>
          <div className="bocc1"></div>
          <div className="bocc1"></div>
        </div>
      </section>

      <section className="SvxSec3">
       <div className="boc1">
        <div className="float">
          
        </div>
       </div>
      </section>
    </React.Fragment>
  );
}

export default Services;
