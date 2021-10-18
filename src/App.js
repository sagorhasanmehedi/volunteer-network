import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./components/Home/Homepage/Homepage";
import Notfoundpage from "./components/Notfoundpage/Notfoundpage";
import Header from "./components/Shared/Header/Header";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Chart from "./components/Chart/Chart";
import Signin from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";
import Footer from "./components/Shared/Footer/Footer";
import AuthProvider from "./components/Context/AuthProvider";
import ServicesDetails from "./components/ServicesDetails/ServicesDetails";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route path="/home">
              <Homepage />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/services">
              <Services />
            </Route>
            <Route path="/chart">
              <Chart />
            </Route>
            <Route path="/signin">
              <Signin />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <PrivateRoute exact path="/servicesdetails/:id">
              <ServicesDetails />
            </PrivateRoute>
            <Route exact path="*">
              <Notfoundpage />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
