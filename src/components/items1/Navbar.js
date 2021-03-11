import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button } from "./Button";
import image1 from "../../images/farmology logo-01-01.png";

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    // spya button sign up tdk muncul wktu tampilan tablet
    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener("resize", showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    {/* onclick spy wktu logi di click, navbar tertutup */}
                    <Link
                        to="/Home"
                        className="navbar-logo"
                        onClick={closeMobileMenu}
                    >
                        <img src={image1} /> <span> FARMOLOGY </span>
                        {/* <i className="fas fa-seedling" /> */}
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"} />
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link
                                to="/Home"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                Beranda
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="../Service"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                Pasar
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="../News"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                Artikel
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/Profile"
                                className="nav-links-mobile"
                                onClick={closeMobileMenu}
                            >
                                PROFILE
                            </Link>
                        </li>
                    </ul>
                    {button && (
                        <Link to="/Profile">
                            <Button buttonStyle="btn-outline"> PROFILE </Button>
                        </Link>
                    )}
                </div>
            </nav>
        </>
    );
}

export default Navbar;
