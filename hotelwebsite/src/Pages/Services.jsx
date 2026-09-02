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
          <div className="bocc1">
            <h2>🏊 Swimming Pool</h2>
            <p>Relax, Refresh & Unwind</p>
          </div>
          <div className="bocc2">
            <h2>DINING</h2>
          </div>
          <div className="bocc3">
            <h2>POOL</h2>
          </div>
        </div>
      </section>

      <section className="SvxSec3">
        <div className="boc1">
          <h1>Featured Experience</h1>
          <h2>Relax. Recharge. Reconnect.</h2>
          <p>
            Your stay should be more than simply a place to sleep. Take time to
            enjoy the facilities, discover new experiences, and make the most of
            every moment at L'Hotel.
          </p>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Services;
