import './App.css';
import Header from './component/Header';
import Main from './component/Main';
import Trip from './component/Trips';
import TripsData from './component/TripsData';
import TripsHeader from './component/TripsHeader';
import Footer from './component/Footer';
import Weekend from './component/Weekend';
import WeekendData from './component/WeekendData';

function App() {
  const trips = TripsData.map(data => {
    return (
      <Trip 
        key={data.id}
        {...data}
      />
    )
  })

  const weekend = WeekendData.map(items => {
    return (
      <Weekend
        key={items.id}
        {...items}
      />
    )
  })
  return (
    <>
      <Header />
      <Main />
      <TripsHeader />
      {trips}
      {weekend}
      <Footer />
    </>
  );
}

export default App;
