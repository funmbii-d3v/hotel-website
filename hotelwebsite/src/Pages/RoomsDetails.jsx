import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { roomInfo } from "../data/roomsInfo";
import {
  FaSmoking,
  FaCalendarDay,
  FaChild,
  FaRulerCombined,
  FaShieldHalved,
} from "react-icons/fa6";
import {
  FaFan,
  FaWifi,
  FaBath,
  FaTv,
  FaVault,
  FaVolumeHigh,
  FaBorderAll,
  FaChair,
  FaClock,
} from "react-icons/fa6";
function RoomDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const room = roomInfo.find((r) => r.id === Number(id));
  if (!room) {
    return (
      <div className="none">
        <h2>Room not found!</h2>
        <Link to="/rooms">Back to Rooms</Link>
      </div>
    );
  }
  return (
    <React.Fragment>
      <div className="deets">
        <h4>Exquisite and luxurious</h4>
        <h1>Rooms and suite collection</h1>
      </div>
      <div className="detailsCon">
        <div className="deTails">
          <h3>
            From <sup>₦</sup>
            <strong style={{ fontSize: "2rem", color: "#69353f" }}>
              {room.price}
            </strong>
            /night
          </h3>
          <div style={{ display: "flex" }}>
            <h1>{room.roomName}</h1>
            <span className="green">Available</span>
          </div>
          <p className="p">{room.about}</p>
          <div className="deetsAbt">
            <p>
              <FaRulerCombined className="deetsIcon" />
              Room size 28M<sup>2</sup>
            </p>
            <p>
              <FaSmoking className="deetsIcon" />
              No Smoking
            </p>
            <p>
              <FaChild className="deetsIcon" />
              18+
            </p>
            <p>
              <FaShieldHalved className="deetsIcon" />
              No Damages
            </p>
          </div>
          <button
            className="bookBtn"
            onClick={() => navigate("/booking", { state: { room } })}
          >
            <FaCalendarDay />
            Book Now
          </button>
          <Link to="/rooms" className="deetLink">
            Back to All Rooms
          </Link>
        </div>
        <div>
          <img src={room.image} className="detailsImg" />
        </div>
      </div>
      <div className="deets">
        <h4>Modern and comfortable</h4>
        <h1>Facilities and Amenities</h1>
      </div>
      <div className="deetsTxt">
        <p>
          <FaFan className="Txticon" />
          Air Conditioning
        </p>
        <p>
          <FaVault className="Txticon" />
          Electronic Safe
        </p>
        <p>
          <FaBath className="Txticon" />
          Bathtubs
        </p>
        <p>
          <FaTv className="Txticon" />
          Flat-screen TV
        </p>
        <p>
          <FaVolumeHigh className="Txticon" />
          Sound System
        </p>
        <p>
          <FaChair className="Txticon" />
          Seating Area
        </p>
        <p>
          <FaWifi className="Txticon" />
          High speed Wi-Fi
        </p>
        <p>
          <FaBorderAll className="Txticon" />
          Vanity Mirror
        </p>
        <p>
          <FaClock className="Txticon" />
          Alarm clock
        </p>
      </div>
    </React.Fragment>
  );
}

export default RoomDetails;
