import React from "react";
import { useLocation, Link } from "react-router-dom";
import "../Components/Styles/Bookings.css";

const Booking = () => {
  const location = useLocation();
  const room = location.state?.room;

  const today = new Date().toISOString().split("T")[0];

  if (!room) {
    return (
      <div className="bookingPage">
        <h2>No room selected</h2>
        <p>Please select a room before making a booking.</p>
        <Link to="/rooms">
          <button>View Rooms</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bookingPage">
      <h1>Book Your Stay</h1>
      <div className="selectedRoom">
        <img src={room.image} alt={room.roomName} width="300" />
        <div>
          <h2>{room.roomName}</h2>
          <p>{room.about}</p>
          <h3>₦{room.price} / night</h3>
        </div>
      </div>
      <div className="bookingForm">
        <h2>Booking Details</h2>
        <label>Check-in Date</label>
        <input type="date" min={today} />
        <label>Check-out Date</label>
        <input type="date" min={today} />
        <label>Number of Guests</label>
        <select>
          <option>1 Guest</option>
          <option>2 Guests</option>
          <option>3 Guests</option>
          <option>4 Guests</option>
        </select>
        <label>Full Name</label>
        <input type="text" placeholder="Enter your full name" />
        <label>Email</label>
        <input type="email" placeholder="Enter your email" />
        <button>Continue to Payment</button>
      </div>
    </div>
  );
};

export default Booking;