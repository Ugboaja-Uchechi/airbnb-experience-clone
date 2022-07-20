import React from "react"
import { FaStar} from "react-icons/fa";
// import TripsData from "./TripsData"

const Trip = (props) => {
  return (
    <>
      <section>
        <h2>Plan a trip with help from local Hosts around the world</h2>
        <div>
          <div>
            <img src={`./Images/${props.img}`} alt={props.alt} />
          </div>
          <div className="card--stats">
          <FaStar />
            <span>{props.stats.rating}</span>
              <span className="gray">({props.stats.count}) • </span>
              <span className="gray">{props.country}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price">
                <span className="bold">From ${props.amount}</span> / person
            </p>
        </div>
      </section>
    </>
  )
}

export default Trip;