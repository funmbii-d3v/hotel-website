import React, { useState } from "react";
import RoomsCard from "../Components/RoomsCard";
import img1 from "../assets/image/two.jfif";
import { roomInfo } from "../data/roomsInfo";
import { FaSistrix } from "react-icons/fa6";
const Rooms = () => {
  const [search, setSearch] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");

  const filteredRooms = roomInfo.filter((room) => {
    const matchesName = room.roomName
      .toLowerCase()
      .includes(search.toLowerCase());
      const matchesType= type=== '' || room.roomName.includes(type)
      return matchesName && matchesType
    });
    const sortedRooms= [...filteredRooms].sort((a, b) =>{
      const priceA= Number(a.price.replace(/,/g, ''))
      const priceB= Number(b.price.replace(/,/g, ''))

      if(price=== 'high-low') return priceB-priceA
      if(price=== 'low-high') return priceA-priceB
      return 0
    })
  return (
    <div>
      <main>
        <div className="hero">
          <img src={img1} className="roomsImg" />
          <div className="heroContent">
            <h2>Rooms & Suites</h2>
            <p>
              Discover comfort and elegance in our thoughtfully designed rooms.
            </p>
          </div>
        </div>
        <section>
          <div className="inputTags">
            <div className="search-wrap">
              <FaSistrix className="sIcon" />
              <input
                type="text"
                className="search"
                placeholder="Search Rooms"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <select name="field" id="Type" value={type} onChange={(e) => setType(e.target.value)}>
              <option value="">Featured</option>
              <option value="Exclusive">Exclusive</option>
              <option value="Deluxe">Deluxe</option>
              <option value="Standard">Standard</option>
            </select>
            <select
              name="field"
              id="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            >
              <option value="">Price</option>
              <option value="high-low">Highest-Lowest</option>
              <option value="low-high">Lowest-Highest</option>
            </select>
          </div>
        </section>
        <section>
          <div className="roomCon">
            {sortedRooms.length > 0 ? (
              sortedRooms.map((room) => {
                return <RoomsCard key={room.id} {...room} />;
              })
            ) : (
              <p>No rooms found matching your criteria.</p>
            )}
          </div>{" "}
        </section>
      </main>
    </div>
  );
};

export default Rooms;
