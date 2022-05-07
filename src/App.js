import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Form from './components/form';
import "./styles/image.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="">
        <header className="row">

          <Navbar />
          
        </header>
        <Switch>
        <Route exact path="/">

            <div className="row my-5 py-4">
              <div className="col-sm-2"></div>
              <div className="col-sm-4">

                <Form />

              </div>
              <div className="col-sm-1"></div>
              <div className="col-sm-5 image">
              </div>
            </div>

          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
