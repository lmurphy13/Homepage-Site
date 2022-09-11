import React from "react";
import { AppBar, Box, Drawer, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import lava from "../images/lava.jpg";
import { bindActionCreators } from "redux";
import * as appActions from "../actions/appActions";
import { connect } from "react-redux";
import * as constants from "../constants";

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

    handleResize = () => {
        let w, h = 0;
        if (document.body.clientWidth || document.body.clientHeight) {
            w = document.body.clientWidth;
            h = document.body.clientHeight;

            this.props.actions.setWinWidth(w);
            this.props.actions.setWinHeight(h);
        }
    }

    componentDidMount() {
        // Set initial dimensions when component loads
        this.handleResize();

        window.addEventListener("resize", this.handleResize);
        window.addEventListener("orientationchange", this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
        window.removeEventListener("orientationchange", this.handleResize);    }
    
    pickStyle() {
        if (this.props.style === undefined) {
            return this.style;
        } else {
            return this.props.style;
        }
    }

    handleDrawerOpen() {
        if (this.props.menuOpen === true) {
            this.props.actions.setMenuClosed();
        } else {
            this.props.actions.setMenuOpen();
        }
        console.log("Drawer is " + this.props.menuOpen)
    }

    renderHamburger() {
        if (this.props.winWidth <= constants.BREAK_WIDTH) {
            return (
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={this.handleDrawerOpen.bind(this)}
                edge="start"
                style={{margin: 2}}
            >
                <MenuIcon/>
            </IconButton>
            );
        }
    }

    renderNav() {
        if (this.props.winWidth > constants.BREAK_WIDTH) {
            return (
                <div className="nav-bar">
                    <NavLink className={({isActive}) => (isActive ? 'nav-link-active' : 'nav-link')}  to="/">
                        Home
                    </NavLink>
                    <NavLink className={({isActive}) => (isActive ? 'nav-link-active' : 'nav-link')} to="/about">
                        About
                    </NavLink>
                    <NavLink className={({isActive}) => (isActive ? 'nav-link-active' : 'nav-link')} to="/research">
                        Research
                    </NavLink>
                    <NavLink className={({isActive}) => (isActive ? 'nav-link-active' : 'nav-link')} to="/projects">
                        Projects
                    </NavLink>
                    <NavLink className={({isActive}) => (isActive ? 'nav-link-active' : 'nav-link')} to="/resume">
                        Resume
                    </NavLink>
                    <NavLink className={({isActive}) => (isActive ? 'nav-link-active' : 'nav-link')} to="/contact">
                        Contact
                    </NavLink>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                <AppBar style={this.pickStyle()} elevation={0}>
                    {this.renderHamburger()}
                    <Typography className="title-name" variant="h6">
                        Liam M. Murphy
                    </Typography>
                    {this.renderNav()}
                </AppBar>
                <Drawer
                    anchor="left"
                    variant="temporary"
                    open={this.props.menuOpen}
                >
                    <Box
                        sx={{width: 250}}
                        role="presentation"
                    >
                        <div className="drawer-root" onClick={this.handleDrawerOpen.bind(this)}>
                            <div className="drawer-top">
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={this.handleDrawerOpen.bind(this)}
                                edge="start"
                                style={{margin: 2}}
                            >
                                <MenuIcon style={{color: "white"}}/>
                            </IconButton>
                            </div>
                            <div className="drawer-nav">
                                <NavLink className={({isActive}) => (isActive ? 'nav-link-mobile-active' : 'nav-link-mobile')} to="/">
                                    Home
                                </NavLink>
                                <NavLink className={({isActive}) => (isActive ? 'nav-link-mobile-active' : 'nav-link-mobile')} to="/about">
                                    About
                                </NavLink>
                                <NavLink className={({isActive}) => (isActive ? 'nav-link-mobile-active' : 'nav-link-mobile')} to="/research">
                                    Research
                                </NavLink>
                                <NavLink className={({isActive}) => (isActive ? 'nav-link-mobile-active' : 'nav-link-mobile')} to="/projects">
                                    Projects
                                </NavLink>
                                <NavLink className={({isActive}) => (isActive ? 'nav-link-mobile-active' : 'nav-link-mobile')} to="/resume">
                                    Resume
                                </NavLink>
                                <NavLink className={({isActive}) => (isActive ? 'nav-link-mobile-active' : 'nav-link-mobile')} to="/contact">
                                    Contact
                                </NavLink>
                            </div>
                            <Typography className="drawer-copyright" variant="h8">
                                &copy; 2019-2022 Liam M. Murphy
                            </Typography>
                        </div>
                    </Box>
                </Drawer>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        winHeight: state.winHeight,
        winWidth: state.winWidth,
        menuOpen: state.menuOpen
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(appActions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TitleBar);