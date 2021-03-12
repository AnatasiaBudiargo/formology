import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "antd/dist/antd.css";
import Dashboard from "./components/pages/Dashboard";
import Home from "./components/pages/Home";
import SignUp from "./components/pages/SignUp";
import News from "./components/pages/News";
import Service from "./components/pages/Service";
// import Product from './components/pages/Product';
import Login from "./components/pages/Login";
import Profile from "./components/pages/Profile";
import StatusPengguna from "./components/pages/StatusPengguna";
import MemulihkanKataSandi from "./components/pages/MemulihkanKataSandi";
// import PrivateRoute from "./config/PrivateRoute";
import { AuthContext } from "./config/Auth";

function App() {
    const exixtingToken = JSON.parse(localStorage.getItem("tokens"));
    const [authTokens, setAuthTokens] = useState(exixtingToken);
    // setAuthTokens digunain waktu login dan signup

    const setTokens = (data) => {
        localStorage.setItem("tokens", JSON.stringify(data));
        setAuthTokens(data);
    };

    return (
        <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
            <Router>
                <Switch>
                    <Route path="/" exact component={Dashboard} />
                    <Route path="/Home" exact component={Home} />]
                    <Route path="/Login" exact component={Login} />
                    <Route path="/SignUp" exact component={SignUp} />
                    <Route
                        path="/StatusPengguna"
                        exact
                        component={StatusPengguna}
                    />
                    <Route
                        path="/MemulihkanKataSandi"
                        exact
                        component={MemulihkanKataSandi}
                    />
                    <Route path="/News" exact component={News} />
                    <Route path="/Service" exact component={Service} />
                    {/* <Route path="/Product" exact component={Product} /> */}
                    <Route path="/Profile" exact component={Profile} />
                    <Route path="/Profile" exact component={Profile} />
                </Switch>
            </Router>
        </AuthContext.Provider>

        // PrivateRoute taruh di home, service, product, profile
    );
}

export default App;
