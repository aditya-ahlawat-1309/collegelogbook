
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Users from "./LogBook/Users";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Login_Users from './Encryption/Login_Users';
import Logout from './Components/Logout';
import Referral from './Components/Referral';
import RegisteredUsers from './LogBook/RegisteredUsers';
import MiddlePage from './MiddlePage';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/chitkara-users">
            <Users />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/login_users">
            <Login_Users />
          </Route>
          <Route exact path="/signup">
            <Register />
          </Route>
          <Route exact path="/logout">
            <Logout />
          </Route>
          <Route exact path="/referral">
            <Referral />
          </Route>
          <Route exact path="/non-alumni">
            <RegisteredUsers />
          </Route>
          <Route exact path="/middle-page">
            <MiddlePage/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
