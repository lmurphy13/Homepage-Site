import React from "react";
import Grid from "@mui/material/Grid";
import { connect } from "react-redux";
import * as constants from "../constants";
import thesis from "../assets/Thesis.pdf";

class Research extends React.Component {
    
    displayResearchContent() {
        if (this.props.winWidth < constants.BREAK_WIDTH) {
            return (
                <>
                <Grid className="grid-container" style={{columnGap: "4rem"}} container>
                        <Grid item xs={10}>
                            <p>
                                <u>Interests:</u> Programming languages, compilers, interpreters, embedded systems,
                                data ethics, and cybersecurity.
                            </p>
                            <br/>

                            <h3 className="page-title">Graduate</h3>

                            <p>
                                My master's thesis, titled <i>Improving Compiler Construction Education by Retargeting 
                                and Extending a Compiler for Embedded Xinu</i>, deals with improving the pedagogical compiler 
                                used to instruct undergraduate and graduate students enrolled in Marquette University's 
                                COSC 4400/5400 Compiler Construction course.
                            </p>

                            <p>
                                I argue that, by retargeting the compiler to the most recent Embedded Xinu platform, students 
                                can draw upon previously acquired skills in operating systems to increase their success in learning 
                                concepts related to compiler construction.
                            </p>

                            <p>
                                While working under the supervision of <a href="https://www.cs.mu.edu/~brylow" target="_blank" rel="noreferrer">Dr. Dennis Brylow</a>, I maintained a {" "}
                                <a href="https://www.cs.mu.edu/~lmurphy9/research" target="_blank" rel="noreferrer">research log</a> on my academic
                                website to track this project's progress.
                            </p>

                            <p>
                                This thesis was successfully defended on April 1st, 2022. The full-text document can be found on {" "}
                                <a href="https://www.proquest.com/docview/2658279769/9925D60F56E04A36PQ/15?accountid=100&parentSessionId=a%2FLZvm5eV3O0fikN3IKrciJ4ceOR73KnPdsqWu3tpOA%3D" target="_blank" rel="noreferrer">ProQuest</a> 
                                , with access provided through Marquette University.
                            </p>
                            <br/>

                            <h3 className="page-title">Undergraduate</h3>

                            <p>
                                During the summer of 2019, I worked under the guidance of Dr. Dennis Brylow as an undergraduate research assistant for the 
                                Systems Laboratory. I helped to port a framebuffer device driver to the Raspberry Pi 3 B+ running Embedded Xinu. After that 
                                project was completed, I began development on a window abstraction device driver and a shell multiplexer similar to the popular
                                Linux utility <code>tmux</code>. This helped to expand the team's knowledge on the framebuffer device as well as working with Xinu's shell.
                            </p>
                        </Grid>
                    </Grid>
                </>
            );
        } else {
            return (
                <>
                    <Grid className="grid-container" style={{columnGap: "4rem"}} container>
                        <Grid item xs={5}>
                            <p>
                                <u>Interests:</u> Programming languages, compilers, interpreters, embedded systems,
                                data ethics, and cybersecurity.
                            </p>

                            <h3 className="page-title">Graduate</h3>
                            <p>
                                My master's thesis, titled <i>Improving Compiler Construction Education by Retargeting 
                                and Extending a Compiler for Embedded Xinu</i>, deals with improving the pedagogical compiler 
                                used to instruct undergraduate and graduate students enrolled in Marquette University's 
                                COSC 4400/5400 Compiler Construction course.
                            </p>

                            <p>
                                I argue that, by retargeting the compiler to the most recent Embedded Xinu platform, students 
                                can draw upon previously acquired skills in operating systems to increase their success in learning 
                                concepts related to compiler construction.
                            </p>

                            <p>
                                While working under the supervision of <a href="https://www.cs.mu.edu/~brylow" target="_blank" rel="noreferrer">Dr. Dennis Brylow</a>, I maintained a {" "}
                                <a href="https://www.cs.mu.edu/~lmurphy9/research" target="_blank" rel="noreferrer">research log</a> on my academic
                                website to track this project's progress.
                            </p>

                            <p>
                                This thesis was successfully defended on April 1st, 2022. The full-text document can be found on {" "}
                                <a href="https://www.proquest.com/docview/2658279769/9925D60F56E04A36PQ/15?accountid=100&parentSessionId=a%2FLZvm5eV3O0fikN3IKrciJ4ceOR73KnPdsqWu3tpOA%3D" target="_blank" rel="noreferrer">ProQuest</a> 
                                , with access provided through Marquette University.
                            </p>
                            <br/>

                            <h3 className="page-title">Undergraduate</h3>
                            <p>
                                During the summer of 2019, I worked under the guidance of Dr. Dennis Brylow as an undergraduate research assistant for the 
                                Systems Laboratory. I helped to port a framebuffer device driver to the Raspberry Pi 3 B+ running Embedded Xinu. After that 
                                project was completed, I began development on a window abstraction device driver and a shell multiplexer similar to the popular
                                Linux utility <code>tmux</code>. This helped to expand the team's knowledge on the framebuffer device as well as working with Xinu's shell.
                            </p>
                        </Grid>
                    </Grid>
                </>
            )
        }
    }
    
    render() {
        return (
            <div className="page-content-container">
                <h2 className="page-title">Research Experience</h2>
                {this.displayResearchContent()}
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

export default connect(mapStateToProps)(Research);