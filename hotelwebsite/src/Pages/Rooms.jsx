import React from 'react'
import { Link } from 'react-router-dom'
import img1 from "../assets/image/two.jfif"
const Rooms = (props) => {
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
        <div className='inputItems'>
          <input type="search" />
          <input type="image" src="" alt="" />
        </div>
      </section>
      <section className={props.style}>
        <div className={props.style}>
          <h4>{props.roomTitle}</h4>
          <p>{props.about}</p>
          <p>{props.price}</p>
          <Link >{props.link}
          <button>View Details</button></Link>
        </div>
      </section>
      </main>
    </div>
  )
}

export default Rooms