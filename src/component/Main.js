import React from "react";
import Swimming from "./Images/swimming.jpg"
import Family from "./Images/family.jpg"
import Football from "./Images/football.png"

const Main = () => {
  return (
    <main>
      <h1>New this week</h1>
      <div>
        <div>
          <img src={Swimming} alt="A lady swimming" />
        </div>
        <div>
          <img src={Football} alt="Kids practising football" />
        </div>
        <div>
          <img src={Family} alt="Kids practising football" />
        </div>
      </div>
    </main>
  )
}

export default Main;