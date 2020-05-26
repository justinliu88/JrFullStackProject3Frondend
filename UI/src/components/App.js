import React from "react";
import "./css/App.css";
import Homepage from "./Homepage";
import Intropage from "./Intropage";

function App() {
    return (
        <div className="pizza-fullpage__container">
            <Homepage />
            <Intropage />
        </div>
    );
}

export default App;
