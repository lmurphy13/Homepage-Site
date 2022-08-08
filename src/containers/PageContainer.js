import React from "react";
import TitleBar from "../components/TitleBar";
import Home from "../components/Home";
import About from "../components/About";
import Research from "../components/Research";
import Projects from "../components/Projects";
import Resume from "../components/Resume";
import Contact from "../components/Contact";
import ErrorPage from "../components/ErrorPage";
import Foot from "../components/Foot";

class PageContainer extends React.Component {


    renderPage() {
        switch(this.props.page) {
            case "about": return ( <About/> );
            case "research": return ( <Research/> );
            case "projects": return ( <Projects/> );
            case "resume": return ( <Resume/> );
            case "contact": return ( <Contact/> );
            default:
                return ( <ErrorPage code="404" />);
        }
    }

    render() {
        if (this.props.page === "home") {
            console.log("hello");
            return (
                <div className="root">
                    <Home/>
                </div>
            );
        } else {
            return (
                <div className="root">
                    <TitleBar/>
                    {this.renderPage()}
                    <Foot/>
                </div>
            );
        }
    }
}

export default PageContainer;