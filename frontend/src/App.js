import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home/Index";
import Footer from "./pages/components/Footer";
import { Switch, Route } from "react-router-dom";
import Signup from "./pages/Sign-up/Signup";
import Login from "./pages/Sign-up/Login";
import Navbar from "./pages/Home/component/Navbar";
import Forgotpassword from "./pages/Sign-up/Forgotpassword";
import Ticketstatus from "./pages/components/Ticketstatus";
import Flightinfo from "./pages/components/Flightinfo";
import Webcheckin from "./pages/components/Webcheckin";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/forgotpassword" component={Forgotpassword} />
        <Route path="/ticketstatus" component={Ticketstatus} />
        <Route path="/flightinfo" component={Flightinfo} />
        <Route path="/webcheckin" component={Webcheckin} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
