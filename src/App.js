import './App.css';
import ApartmentContainer from './components/ApartmentContainer';
import Footer from './components/Footer';
import Nav from './components/Nav';
import { Provider } from 'react-redux'
import store from "./store/store";

function App() {
  return (

    <Provider store={store}>
      <div className="App">
        <Nav />
        <ApartmentContainer />
        <Footer/>
      </div>
    </Provider>
  );
}

export default App;
