/* Copyright (c) 2024 - Liam M. Murphy */

import React from "react";
import { NavLink } from "react-router-dom";
import resume from "../media/LiamMurphyResumeJune2023.pdf";

class Nav extends React.Component {
    render() {
        return (
            <div className="nav-menu">
                <NavLink className="nav-link" to="/">
                    Home
                </NavLink>
                <NavLink className="nav-link" to="/about">
                    About
                </NavLink>
                <NavLink className="nav-link" to="/projects">
                    Projects
                </NavLink>
                <NavLink className="nav-link" to="/contact">
                    Contact
                </NavLink>
                <a
                    className="nav-link"
                    href={resume}
                    download="LiamMurphyResume.pdf"
                >
                    Resume
                </a>
            </div>
        );
    }
}

export default Nav;
