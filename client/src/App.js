import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navigation from "./components/layout/Navigation/Navigation";
import Footer from "./components/layout/Footer/Footer";
import { useState, useEffect } from "react";
import AuthService from "./service/auth.service";
import Routes from "./components/routes/index";

const authService = new AuthService();

const App = () => {
  const [loggedUser, setLoggedUser] = useState(undefined);

  const storeUser = (user) => setLoggedUser(user);

  const fetchUser = () => {
    authService
      .isloggedin()
      .then((res) => storeUser(res.data))
      .catch((err) => storeUser(null));
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="App">
      <Navigation storeUser={setLoggedUser} loggedUser={loggedUser} />
      <Routes storeUser={setLoggedUser} loggedUser={loggedUser} />
      <Footer />
    </div>
  );
};

export default App;
