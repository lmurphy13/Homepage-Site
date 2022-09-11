import React from "react";
import TitleBar from "./TitleBar";
import Foot from "./Foot";
import Grid from "@mui/material/Grid";
import liam from "../images/grad2022_cropped.jpg";
import reactStyle from "../style/reactStyle";
import { connect } from "react-redux";
import * as constants from "../constants";

class Home extends React.Component {
    
    displayIntro() {
        if (this.props.winWidth > constants.BREAK_WIDTH) {
            return (
                <Grid className="grid-container" container>
                    <Grid item xs={4}>
                        <img className="liamimg" src={liam} alt="liam"></img>
                    </Grid>
                    <Grid item xs={4}>
                        <p>
                            I am a graduate of {" "}
                            <a 
                                href="https://www.marquette.edu"
                                target="_blank"
                                rel="noreferrer">Marquette University</a>, having earned a {" "}
                            <a 
                                href="https://www.marquette.edu/computer-science/graduate-program-computing.php"
                                target="_blank"
                                rel="noreferrer">M.S. in Computing</a> {" "}
                                with a concentration in Information Assurance and Cyber Defense in May 2022.
                        </p>
                        <p>
                            I also earned my Bachelor of Science degree in Computer Science with a minor 
                            in Spanish in May 2021.
                        </p>
                        <p>
                            Since June 2021, I have been working as a Software Engineer at 
                            <a 
                                href="https://www.astronautics.com"
                                target="_blank"
                                rel="noreferrer"> Astronautics</a>.
                        </p>
                    </Grid>
                </Grid>
            );
        } else {
            return (
                <div>
                    <Grid className="grid-container" container>
                        <Grid item xs={8}>
                            <img className="liamimg" src={liam} alt="liam"
                                style={{marginLeft: "2.1rem"}}></img>
                        </Grid>
                    </Grid>
                    <Grid className="grid-container" style={{marginLeft: "-1rem"}} container>
                        <Grid item xs={11}>
                            <p>
                                I am a graduate of {" "}
                                <a 
                                    href="https://www.marquette.edu"
                                    target="_blank"
                                    rel="noreferrer">Marquette University</a>, having earned a {" "}
                                <a 
                                    href="https://www.marquette.edu/computer-science/graduate-program-computing.php"
                                    target="_blank"
                                    rel="noreferrer">M.S. in Computing</a> {" "}
                                    with a concentration in Information Assurance and Cyber Defense in May 2022.
                            </p>
                            <p>
                                I also earned my Bachelor of Science degree in Computer Science with a minor 
                                in Spanish in May 2021.
                            </p>
                            <p>
                                Since June 2021, I have been working as a Software Engineer at 
                                <a 
                                    href="https://www.astronautics.com"
                                    target="_blank"
                                    rel="noreferrer"> Astronautics</a>.
                            </p>
                        </Grid>
                    </Grid>
                </div>
            );
        }
    }

    displayFooter() {
        if (this.props.winWidth > constants.BREAK_WIDTH) {
            return (<Foot/>)
        }
    }

    render() {
        let greetingClass = (this.props.winWidth <= constants.BREAK_WIDTH) ? "greeting-mobile" : "greeting";

        return (
            <div>
                <div style={reactStyle.bgImg}>
                    <TitleBar style={reactStyle.titleBar} />
                    <p className={greetingClass}>Hi! I'm Liam.</p>
                </div>
                <div className="page-content-container">
                    {this.displayIntro()}
                </div>
                {this.displayFooter()}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        winHeight: state.winHeight,
        winWidth: state.winWidth
    }
};

export default connect(mapStateToProps)(Home);