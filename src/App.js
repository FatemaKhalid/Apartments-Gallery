import './App.css';
import ApartmentContainer from './components/ApartmentContainer';
import Footer from './components/Footer';
import Nav from './components/Nav';


function App() {
  return (
    <div className="App">
      <Nav />
      <ApartmentContainer />
      <Footer/>
    </div>
  );
}

export default App;
