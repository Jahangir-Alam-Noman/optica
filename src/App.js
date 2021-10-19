import './App.css';
import NotFound from './Pages/NotFound/NotFound';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import ServiceDetails from './Pages/Home/ServiceDetails/ServiceDetails';
import Services from './Pages/Home/Services/Services';
import Doctors from './Pages/Doctors/Doctors';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/doctors">
            <Doctors></Doctors>
          </Route>

          <Route path="/services">
            <Services></Services>
          </Route>

          <Route path="/service/:serviceId">
            <ServiceDetails></ServiceDetails>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
