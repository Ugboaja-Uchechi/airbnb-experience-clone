import './App.css';
import Header from './component/Header';
import Main from './component/Main';
import Trip from './component/Trips';
import TripsData from './component/TripsData';
import Footer from './component/Footer';
import Weekend from './component/Weekend';
import WeekendData from './component/WeekendData';
import GroupData from './component/GroupData';
import Groups from './component/Groups';

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

  const groups = GroupData.map(group => {
    return (
      <Groups
        key={group.id}
        {...group}
      />
    )
  })
  return (
    <>
      <Header />
      <Main />
      <section>
        <h2 className="trip-header">Plan a trip with help from local Hosts around the world</h2>
        <div className="grid-container">
          {trips}
        </div>
      </section>
      <section>
        <h2 className='trip-header'>Great for groups</h2>
        <div className="grid-container">
          {groups}
        </div>
      </section>
      <section>
        <h2 className='trip-header'>Make plans this weekend</h2>
        <div className="grid-container">
          {weekend}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
