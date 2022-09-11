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
import * as constants from "../constants";
import { connect } from "react-redux";

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

    displayFooter() {
        if (this.props.winWidth > constants.BREAK_WIDTH) {
            return (<Foot/>)
        }
    }

    render() {
        if (this.props.page === "home") {
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
                    {this.displayFooter()}
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        winHeight: state.winHeight,
        winWidth: state.winWidth
    }
};

export default connect(mapStateToProps)(PageContainer);