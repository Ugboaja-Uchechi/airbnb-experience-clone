import React from "react";
import Swimming from "./Images/swimming.jpg"
import Family from "./Images/family.jpg"
import Football from "./Images/football.png"

const Main = () => {
  return (
    <main className="hero">
      <h1>New this week</h1>
      <div className="hero-images-container">
        <div className="gt-1">
          <img src={Swimming} alt="A lady swimming" className="hero-images" />
        </div>
        <div className="gt-2">
          <img src={Football} alt="Kids practising football" className="hero-images" />
        </div>
        <div className="gt-3">
          <img src={Family} alt="Kids practising football" className="hero-images" />
        </div>
      </div>
    </main>
  )
}

export default Main;