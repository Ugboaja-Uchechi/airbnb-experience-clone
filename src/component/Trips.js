import React from "react"
import Man from "./Images/man.jpg"
import Pyramid from "./Images/pyramid.jpg"
import Woman from "./Images/woman.jpg"
import Boat from "./Images/boat.jpg"
import Beach from "./Images/beach.jpg"

const Trip = () => {
  return (
    <>
      <section>
        <h2>Plan a trip with help from local Hosts around the world</h2>
        <div>
          <div>
            <img src={Man} alt="A man standing on a rock looking at mountains"/>
          </div>
          <div>
            <img src={Pyramid} alt="A man standing on a rock looking at mountains"/>
          </div>
          <div>
            <img src={Woman} alt="A woman standing on a rock"/>
          </div>
          <div>
            <img src={Boat} alt="A woman with legs crossed sitting in a boat"/>
          </div>
          <div>
            <img src={Beach} alt="Tourists on a beach"/>
          </div>
        </div>
      </section>
    </>
  )
}

export default Trip;