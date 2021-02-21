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
import PassangerDetails from "./pages/PassangerDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import { loadUser } from "./store/auth/AuthAction";
import { connect } from "react-redux";
import store from "./store/rootStore";
import setAuthToken from "./utils/SetAuthTokenUtility";

if (localStorage.token) {
  setAuthToken(localStorage.toke);
}
function App() {
  React.useEffect(() => {
    store.dispatch(loadUser());
  }, []);
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
        <Route path="/bookingDetails/:bookingId" component={PassangerDetails} />
        <Route path="/webcheckin" component={Webcheckin} />
      </Switch>
      <Footer />
      <ToastContainer />
    </div>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(App);
