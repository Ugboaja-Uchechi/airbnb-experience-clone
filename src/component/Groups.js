import React from "react"

import { FaStar} from "react-icons/fa";
// import TripsData from "./TripsData"

const Groups = (props) => {
  return (
    <>
        <div>
            <img src={props.img} alt={props.alt} />

          <div>
          <FaStar />
            <span>{props.stats.rating}</span>
              <span>({props.stats.count}) • </span>
              <span>{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p>
                <span>From ${props.amount}</span> / person
            </p>
        </div>
    </>
  )
}

export default Groups;