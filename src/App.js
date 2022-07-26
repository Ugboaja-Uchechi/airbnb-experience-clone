import './App.css';
import Header from './component/Header';
import Main from './component/Main';
import Trip from './component/Trips';
import TripsData from './component/TripsData';
import TripsHeader from './component/TripsHeader';
import Footer from './component/Footer';

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
      <TripsHeader />
      {trips}
      <Footer />
    </>
  );
}

export default App;
