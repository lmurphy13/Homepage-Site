import React from "react";
import { AppBar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import lava from "../images/lava.jpg";

class TitleBar extends React.Component {
    constructor(props) {
        super(props);
        
        this.style = {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            position: "static",
            background: "transparent",
            backgroundImage: `url(${lava})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            minHeight: "60px",
            maxHeight: "60px"
        }
    }

    pickStyle() {
        if (this.props.style === undefined) {
            console.log("here");
            return this.style;
        } else {
            return this.props.style;
        }
    }

    render() {

        return (
            <div>
                <AppBar style={this.pickStyle()} elevation={0}>
                    <Typography className="title-name" variant="h6">
                        Liam M. Murphy
                    </Typography>
                    <div className="nav-bar">
                        <NavLink className="nav-link" to="/">
                            Home
                        </NavLink>
                        <NavLink className="nav-link" activeClassName="nav-link-active" to="/about">
                            About
                        </NavLink>
                        <NavLink className="nav-link" activeClassName="nav-link-active" to="/research">
                            Research
                        </NavLink>
                        <NavLink className="nav-link" activeClassName="nav-link-active" to="/projects">
                            Projects
                        </NavLink>
                        <NavLink className="nav-link" activeClassName="nav-link-active" to="/resume">
                            Resume
                        </NavLink>
                        <NavLink className="nav-link" activeClassName="nav-link-active" to="/contact">
                            Contact
                        </NavLink>
                    </div>
                </AppBar>
            </div>
        );
    }
}

export default TitleBar;