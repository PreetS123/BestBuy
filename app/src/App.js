
// import './App.css';
import { Footer } from './Components/Footer';
import { Navbar } from './Components/Navbar';
import { Home } from './LandingPage/Home';


function App() {
  return (
    <div className="App">
     {/* <h1>Girl</h1> */}
     <Navbar/>
       <Home/>
       <Footer/>
    </div>
  );
}

export default App;
