import React, { useState, useEffect } from "react";
import { AppBar, Drawer, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import lava from "../images/lava.jpg";
import * as utils from "../utilities";

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

        this.width = undefined;
        this.height = undefined;
    }

    componentDidMount() {
        function handleResize() {
            let { height, width } = utils.getWindowDimensions();
            this.height = height;
            this.width = width;
        }


        window.addEventListener("resize", handleResize);

        //console.log("winHeight: " + this.state.winHeight);
    }

    componentDidUpdate() {
        let { height, width } = utils.getWindowDimensions();
        this.height = height;
        this.width = width;
        console.log("here");
    }
    
    pickStyle() {
        if (this.props.style === undefined) {
            return this.style;
        } else {
            return this.props.style;
        }
    }

    renderHamburger(width) {
        if (width <= 800) {

            return (
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={this.handleDrawerOpen}
                edge="start"
                style={{margin: 2}}
            >
                <MenuIcon/>
                
            </IconButton>
            );
        }
    }

    handleDrawerOpen() {
        
    }

    render() {
        console.log("height " + this.height);
        console.log("width " + this.width);

        return (
            <div>
                <AppBar style={this.pickStyle()} elevation={0}>
                    {this.renderHamburger(this.width)}
                    <Typography className="title-name" variant="h6">
                        Liam M. Murphy
                    </Typography>
                    <div className="nav-bar">
                        <NavLink className="nav-link" activeClassName="nav-link-active" to="/">
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
                <Drawer></Drawer>
            </div>
        );
    }
}

export default TitleBar;