import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from "../img/map.png";

const Navbar = () => {
    const [color, setColor] = useState(false);

    const changeColor = () => {
        if (window.scrollY >= 1) {
            setColor(true);
        } else {
            setColor(false);
        }
    };

    window.addEventListener("scroll", changeColor);

    return (
        <div>
            <nav
                className={
                    color
                        ? "fixed-top nav-bg navbar navbar-expand-lg bg"
                        : "fixed-top navbar navbar-light navbar-expand-lg"
                }
            >
                <div className="container">
                    <a className="navbar-brand logo" to="">
                        <img src={img} alt="" height={30} />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse justify-content-end"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">
                                    Home
                                </Link>
                            </li>
                            {/* <li className="nav-item">
                            <Link className="nav-link " aria-current="page" to="/contact">Donation</Link>
                        </li> */}
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to="/contact">
                                    Contact
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to="/contact">
                                    <abbr title="Help">
                                        <i class="bi bi-question-diamond-fill"></i>
                                    </abbr>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
