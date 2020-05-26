import React from "react";
import "./css/Homepage.css";

function Homepage() {
    return (
        <div className="container-homepage">
            <div className="container-slogan">
                <p className="homepage-slogan">Get it while it's hot!</p>
                <p className="homepage-subSlogan">
                    We create custom personal pizzas with quality ingredients in
                    only five minutes
                </p>
                <button
                    type="button"
                    className="btn btn-outline-warning"
                    onClick={(event) => (window.location.href = "#intropage")}
                >
                    ORDER ONLINE
                </button>
            </div>
        </div>
    );
}

export default Homepage;
