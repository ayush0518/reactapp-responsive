import { Redirect, Route, Switch } from "react-router";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import About from "./About";
import Contact from "./Contact";
import Fetch from "./Fetch";
import Footer from "./Footer";
import Home from "./Home";
import Login from "./Login";
import Navbar from "./Navbar";
import Service from "./Service";

function App() {
  return (
    <>
      {/* <Login />
      <Fetch /> */}
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/service" component={Service} />
        <Redirect path="/" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
