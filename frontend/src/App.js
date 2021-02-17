import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home/Index";
import Footer from './pages/components/Footer';
import {Switch,Route} from 'react-router-dom'
import Navbar from "./pages/Home/component/Navbar";

function App() {
  return (
    <div className="App">
         <Navbar />
      <Switch>
        <Route path='/' component={Home}/>
        </Switch>
      <Footer/>
    </div>
  );
}

export default App;
