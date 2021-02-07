import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home/Index";
import Footer from './pages/components/Footer';
import {Switch,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' component={Home}/>
        </Switch>
      <Footer/>
    </div>
  );
}

export default App;
