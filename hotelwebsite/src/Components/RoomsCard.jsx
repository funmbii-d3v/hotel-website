import React from 'react'
import { Link } from 'react-router-dom'
const RoomsCard = (props) => {
  return (
    <React.Fragment>
      <div className="roomcard">
        <img src={props.image} className="cardImg" />
        <div className='roomTxt'>
        <h4>{props.roomName}</h4>
        <p className='pgraph'>{props.about}</p>
        <p>₦{props.price} /night</p>
        <Link to={`/rooms/${props.id}`}>
        <button className='detailsBtn'>View Details</button></Link>
        </div>
      </div>
    </React.Fragment>
  )
}

export default RoomsCard