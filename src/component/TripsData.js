import Man from "./Images/man.jpg"
import Pyramid from "./Images/pyramid.jpg"
import Woman from "./Images/woman.jpg"
import Boat from "./Images/boat.jpg"
import Beach from "./Images/beach.jpg"
import Nature from "./Images/nature.jpg"

const TripsData = [
  {
    id: 1,
    img: Man,
    title: "A trip to the mountains",
    stats: {
      rating: 4.5,
      count: 10,
    },
    country: "Russia",
    amount: 10,
    alt: "A man standing on a rock looking at mountains"
  },
  {
    id: 2,
    img: Pyramid,
    title: "Come see the pyramids",
    stats: {
      rating: 4.9,
      count: 25,
    },
    country: "Egypt",
    amount: 15,
    alt: "A man walking towards the pyramids"
  },
  {
    id: 3,
    img: Woman,
    title: "Come see the greenlands",
    stats: {
      rating: 5,
      count: 15,
    },
    country: "Austria",
    amount: 9,
    alt: "A woman standing on a rock"
  },
  {
    id: 4,
    img: Boat,
    title: "Take a boat cruise with us",
    stats: {
      rating: 4.8,
      count: 10,
    },
    country: "Cape Verde",
    amount: 10,
    alt: "A woman with legs crossed sitting in a boat"
  },
  {
    id: 5,
    img: Beach,
    title: "Take a vacation",
    stats: {
      rating: 4.3,
      count: 20,
    },
    country: "U.S.A",
    amount: 25,
    alt: "Tourists on a beach"
  },
  {
    id: 6,
    img: Nature,
    title: "Take a hike through nature",
    stats: {
      rating: 4.9,
      count: 30,
    },
    country: "Vietnam",
    amount: 10,
    alt: "Women hiking through nature"
  }
  
]

export default TripsData;