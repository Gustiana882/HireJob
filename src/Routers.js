import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import Sort from "./Pages/Sort/Sort.jsx";
import Profile from "./Pages/Profile/Profile.jsx";
import Login from "./Pages/Login/Login.jsx";
import Register from "./Pages/Register/Register.jsx";
import RegisterHR from "./Pages/Register/RegisterHR.jsx";
import EditProfile from "./Pages/EditProfile/Profile.jsx";
import Hire from "./Pages/Hire/Hire.jsx";
import Rekruter from "./Pages/Rekruter/Profile/Profile.jsx";
import RekruterEditProfile from "./Pages/Rekruter/EditProfile/EditProfile.jsx";

function Routers() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/recruter/profile" component={RekruterEditProfile} />
        <Route exact path="/recruter/:name" component={Rekruter} />
        <Route exact path="/profile/:name" component={Profile} />
        <Route exact path="/hire" component={Hire} />
        <Route exact path="/user/profile" component={EditProfile} />
        <Route exact path="/search" component={Sort} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/register-recruiter" component={RegisterHR} />
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routers;
