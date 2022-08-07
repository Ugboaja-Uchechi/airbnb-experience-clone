import Lunch from "./Images/lunch.jpg";
import Cheers from "./Images/cheers.jpg";
import Hike from "./Images/hike.jpg";
import Up from "./Images/up.jpg";
import Fire from "./Images/fire.jpg";
import People from "./Images/people.jpg";

const GroupData = [
  {
    id: 1,
    img: Lunch,
    title: "Have lunch while meeting new people",
    stats: {
      rating: 4.8,
      count: 10,
    },
    country: "U.S.A",
    amount: 10,
    alt: "People sitting down for lunch"
  },
  {
    id: 2,
    img: Cheers,
    title: "Lunch",
    stats: {
      rating: 4.7,
      count: 15,
    },
    country: "Canada",
    amount: 10,
    alt: "People clanking their glasses"
  },
  {
    id: 3,
    img: Hike,
    title: "Take a hike through Hawaii",
    stats: {
      rating: 5,
      count: 25,
    },
    country: "Hawaii",
    amount: 7,
    alt: "People hiking on a hill"
  },
  {
    id: 4,
    img: Up,
    title: "Celebrate with friends",
    stats: {
      rating: 4.8,
      count: 25,
    },
    country: "Mexico",
    amount: 5,
    alt: "People raising up their hands toward the sky"
  },
  {
    id: 5,
    img: Fire,
    title: "Camp fire stories",
    stats: {
      rating: 4.9,
      count: 5,
    },
    country: "Mexico",
    amount: 10,
    alt: "Peoplw sitting around a fire in the desert"
  },
  {
    id: 6,
    img: People,
    title: "Relax on the beach",
    stats: {
      rating: 4.7,
      count: 30,
    },
    country: "U.S.A",
    amount: 10,
    alt: "People relaxing on the beach"
  }
]

export default GroupData;