import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Main from './component/Main';
import Trip from './component/Trips';
import TripsData from './component/TripsData';
import TripsHeader from './component/TripsHeader';

function App() {
  const trips = TripsData.map(data => {
    return (
      <Trip 
        key={data.id}
        {...data}
      />
    )
  })
  return (
    <>
      <Header />
      <Main />
      {trips}
      <TripsHeader />
      <Footer />
    </>
  );
}

export default App;
