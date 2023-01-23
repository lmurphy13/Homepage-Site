import React from "react";
import Grid from "@mui/material/Grid";
import { connect } from "react-redux";
import * as constants from "../constants";
import mucs from "../images/mucs.png";
import liam_parade from "../images/liam_parade.jpg";

class About extends React.Component {
    
    displayAboutContent() {
        if (this.props.winWidth < constants.BREAK_WIDTH) {
            return (
                <Grid className="grid-container" style={{direction: "column"}} container>
                    <Grid item xs={10}>
                        <p>
                            I am originally from Chicago, IL, but moved to Milwaukee, WI to attend Marquette University.
                            I earned my B.S. in Computer Science in May of 2021. I continued my education at Marquette and earned my
                            M.S. in Computing with a specialization in Information Assurance and Cyber Defense.
                        </p>
                    </Grid>
                    <Grid item xs={false} sm={4} md={6}>
                       <img className="grid-img" style={{marginLeft: "0"}} src={mucs} alt="Marquette Computer Science"/>
                    </Grid>
                    <Grid item xs={10}>
                        <p>
                            After my undergraduate graduation, I begain my career as a software engineer at Astronautics
                            Corporation of America in Oak Creek, WI. My role focuses on writing C and JavaScript (JSX) for 
                            a line of embedded server products for aircraft environments. 
                        </p>
                    </Grid>
                    <Grid item xs={10}>
                        <p>
                            Current goals of mine include traveling and learning to play the piano.
                        </p>
                        <p>
                            Fun fact: I already know how to play the bagpipes, and have been
                            playing for over 12 years.
                        </p>
                    </Grid>
                    <Grid item xs={10}>
                        <img className="grad-img" style={{width: "18rem", marginTop: "2rem"}} src={liam_parade} alt="parade" />
                    </Grid>
                </Grid>
            );
        } else {
            return (
                <>
                <Grid className="grid-container" style={{columnGap: "4rem"}} container>
                    <Grid item xs={3}>
                        <p>
                            I am originally from Chicago, IL, but moved to Milwaukee, WI to attend Marquette University.
                            I earned my B.S. in Computer Science in May of 2021. I continued my education at Marquette and earned my
                            M.S. in Computing with a specialization in Information Assurance and Cyber Defense.
                        </p>
                    </Grid>
                    <Grid item xs={3}>
                       <img className="grid-img" src={mucs} alt="Marquette Computer Science"/>
                    </Grid>
                </Grid>
                <Grid className="grid-container" style={{columnGap: "4rem"}} container>
                    <Grid item xs={3}>
                        
                    </Grid>
                    <Grid item xs={3}>
                        <p>
                            After my undergraduate graduation, I begain my career as a software engineer at Astronautics
                            Corporation of America in Oak Creek, WI. My role focuses on writing C and JavaScript (JSX) for 
                            a line of embedded server products for aircraft environments. 
                        </p>
                    </Grid>
                </Grid>
                <Grid className="grid-container" style={{columnGap: "4rem"}} container>
                    <Grid item xs={3}>
                        <p>
                            Current goals of mine include traveling and learning to play the piano.
                        </p>
                        <p>
                            Fun fact: I already know how to play the bagpipes, and have been
                            playing for over 12 years.
                        </p>
                    </Grid>
                    <Grid item xs={3}>
                        <img className="grad-img" style={{width: "20rem", marginLeft: "3rem", marginTop: "2rem"}} src={liam_parade} alt="parade" />
                    </Grid>
                </Grid>
                </>
            );
        }
    }
    
    render() {
        return (
            <div className="page-content-container">
                <h2 className="page-title">About Me</h2>
                {this.displayAboutContent()}
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

export default connect(mapStateToProps)(About);
