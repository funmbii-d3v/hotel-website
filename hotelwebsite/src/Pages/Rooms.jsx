import React, {useState} from 'react'
import RoomsCard from '../Components/RoomsCard'
import img1 from "../assets/image/two.jfif"
import { roomInfo } from '../data/roomsInfo'
const Rooms = () => {
  const[search, setSearch]= useState('')
  const[price, setPrice]= useState('')
  const[type, setType]= useState('')
  return (
    <div>
      <main>
      <div className='hero'>
        <img src={img1} className='roomsImg'/>
        <div className="heroContent">
          <h2>Rooms & Suites</h2>
          <p>Discover comfort and elegance in our thoughtfully designed rooms.</p>
        </div>
      </div>
      <section>
        <div className="inputTags">
            <input type="search" placeholder='search'/>
            <select name="field" id="Type">
              <option value="">Exclusive</option>
              <option value="">Deluxe</option>
              <option value="">Standard</option>
            </select>
            <select name="field" id="Price">
              <option value="">Highest-Lowest</option>
              <option value="">Lowest-Highest</option>
            </select>
        </div>
      </section>
      <section>
        <div className='roomCon'>{roomInfo.map((room)=>{
          return(
            <RoomsCard key={room.id} {...room}/>
          )
        })}
       </div>
      </section>
      </main>
    </div>
  )
}

export default Rooms