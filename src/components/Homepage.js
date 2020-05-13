import React from "react";
import "./css/Homepage.css";

function Homepage() {
    return (
        <div className="container-homepage">
            <div className="container-slogan">
                <h1>Got it while it's hot!</h1>
                <p>
                    We create custom personal pizzas with quality ingredients in
                    only five minutes
                </p>
                <button type="button" className="btn btn-outline-warning">
                    ORDER ONLINE
                </button>
            </div>
        </div>
    );
}

export default Homepage;
