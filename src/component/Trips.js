import React from "react"

import { FaStar} from "react-icons/fa";
// import TripsData from "./TripsData"

const Trip = (props) => {
  return (
  
        <div className="card">
          <img src={props.img} alt={props.alt} className="images" />
          <div>
            <FaStar className="star" />
            <span className="span">{props.stats.rating}</span>
              <span className="span count">({props.stats.count}) • </span>
              <span className="span country">{props.country}</span>
          </div>
            <p className="paragraph">{props.title}</p>
            <p className="paragraph">
              <span className="font-weight">From ${props.amount}</span> / person
            </p>
        </div>
    
  )
}

export default Trip;