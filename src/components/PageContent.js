/* Copyright (c) 2024 - Liam M. Murphy */

import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import PCBuild from "../pages/projects/PCBuild";
import Contact from "../pages/Contact";

class PageContent extends React.Component {
    getPage() {
        switch (this.props.page) {
            /* Main pages */
            case "home":
                return <Home />;
            case "about":
                return <About />;
            case "projects":
                return <Projects />;
            case "contact":
                return <Contact />;
            /* Project pages */
            case "pc-build":
                return <PCBuild />;
            default:
                return <p className="error-404">Uh Oh! Page Not Found!</p>;
        }
    }

    render() {
        return <>{this.getPage()}</>;
    }
}

export default PageContent;
