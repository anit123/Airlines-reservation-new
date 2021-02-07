import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home/Index";
import Footer from "./pages/components/Footer";
import { Switch, Route } from "react-router-dom";
import Signup from "./pages/Sign-up/Signup";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
      <Signup />
    </div>
  );
}

export default App;
