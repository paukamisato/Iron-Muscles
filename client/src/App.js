import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navigation from './components/layout/Navigation/Navigation'
import Footer from './components/layout/Footer/Footer'
import Routes from "./components/routes/index";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes/>
      <Footer/>
    </div>
  );
}

export default App;
