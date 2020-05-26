import React from "react";
import "./App.css";
import Dashboard from "./components/Dashboard.js";
import SignIn from "./components/signin/Signin.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
    state = {
        userName: "admin",
        passWord: "admin",
    };

    render() {
        return (
            <Router>
                <div className="App">
                    <Switch>
                        <Route
                            path="/"
                            exact
                            render={(props) => (
                                <SignIn
                                    {...props}
                                    userName={this.state.userName}
                                    passWord={this.state.passWord}
                                />
                            )}
                        ></Route>
                        <Route
                            path="/dashboard"
                            exact
                            render={(props) => (
                                <Dashboard
                                    {...props}
                                    userName={this.state.userName}
                                />
                            )}
                        ></Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
