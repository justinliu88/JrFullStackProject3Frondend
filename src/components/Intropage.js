import React from "react";
import "./css/Intropage.css";
import logo from "../assets/icon/shopping-cart.svg";

function Intropage() {
    return (
        <div id="intropage" className="container-Intropage">
            <div className="pos-f-t">
                <nav className="navbar navbar-dark bg-black ">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarToggleExternalContent"
                        aria-controls="navbarToggleExternalContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <p className="navbar-logo">Margherita</p>
                    <img
                        className="navbar-shoppingCart"
                        src={logo}
                        alt="logo"
                    />
                </nav>
                <div className="collapse" id="navbarToggleExternalContent">
                    <div className="bg-dark p-4">
                        <h4 className="text-white">Collapsed content</h4>
                        <span className="text-muted">
                            Toggleable via the navbar brand.
                        </span>
                    </div>
                </div>
            </div>
            <p>
                We are pizza makers, and our mission is to make cool pizza which
                feeds all your senses.
            </p>
            <p>
                We prefer to rely on instinct and feel, measuring by had, not by
                the gram. This is the authentic way to make pizza. Sure it's a
                little unrefined, but we're proud of that. It's pizza like which
                feeds your sense of sharing, adding flavour to those occasions
                when you get together with friends and family. And really, isn't
                that what it's all about? Because when pizza feeds all your
                senses, it's not just great, it's sensational.
            </p>
            <div className="container-Intropage__careful">
                <img />
                <p className="container-Intropage__careful__slogan">
                    We're Careful
                </p>
                <p className="container-Intropage__careful__description">
                    The crust is stored in a separate container, on a separate
                    shelf in our fridge. The cheese, marinara sauce and
                    pepperoni are stored in a designated kit, and every pizza is
                    freshly baked on designated parchment paper in our ovens.
                </p>
            </div>
            <div className="container-Intropage__certified">
                <img />
                <p className="container-Intropage__certified__slogan">
                    We're Certified
                </p>
                <p className="container-Intropage__certified__description">
                    Our cheese-only and cheese-and-pepperoni gluten-free pizzas
                    are prepared using the procedures certified by the Gluten
                    Intolerance Group (GIG), and we take specific caution when
                    making these pizzas.
                </p>
            </div>
            <div className="container-Intropage__creative">
                <img />
                <p className="container-Intropage__creative__slogan">
                    You're Creative
                </p>
                <p className="container-Intropage__creative__description">
                    For those simply looking to reduce gluten in their diets, we
                    offer a Create Your Own pizza option. The cheese, pepperoni
                    and marinara come from our gluten-free kit, but all
                    additional toppings are stored at our standard make table.
                </p>
            </div>
        </div>
    );
}

export default Intropage;
