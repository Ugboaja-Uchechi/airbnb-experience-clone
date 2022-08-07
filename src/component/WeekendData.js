import Bowling from "./Images/bowling.jpg";
import Picnic from "./Images/picnic.jpg";
import Carnival from "./Images/carnival.jpg";
import Net from "./Images/net.jpg";
import Camp from "./Images/camp.jpg";
import Surf from "./Images/surf.jpg";

const WeekendData = [
  {
    id: 1,
    img: Bowling,
    title: "Interactive bowling class",
    stats: {
      rating: 4.8,
      count: 20,
    },
    country: "U.S.A",
    amount: 10,
    alt: "A woman grabbing a bowling ball"
  },
  {
    id: 2,
    img: Picnic,
    title: "Let's go to the beach",
    stats: {
      rating: 4.5,
      count: 15,
    },
    country: "Argentina",
    amount: 7,
    alt: "A Picnic on the beach"
  },
  {
    id: 3,
    img: Carnival,
    title: "Take a trip to the fair",
    stats: {
      rating: 5,
      count: 25,
    },
    country: "Austria",
    amount: 19,
    alt: "A merry go round"
  },
  {
    id: 4,
    img: Net,
    title: "See Brazil through my lens",
    stats: {
      rating: 4.8,
      count: 20,
    },
    country: "Brazil",
    amount: 10,
    alt: "A woman laying down"
  },
  {
    id: 5,
    img: Camp,
    title: "Learn how to organise great camping trips",
    stats: {
      rating: 4.6,
      count: 5,
    },
    country: "Mexico",
    amount: 7,
    alt: "People camping"
  },
  {
    id: 6,
    img: Surf,
    title: "Learn how to catch a wave",
    stats: {
      rating: 4.9,
      count: 30,
    },
    country: "U.S.A",
    amount: 10,
    alt: "A lady surfing"
  }
]

export default WeekendData;