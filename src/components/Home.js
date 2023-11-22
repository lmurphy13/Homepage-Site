// Copyright (c) 2023-2024 Liam M. Murphy

import React from "react";
import TitleBar from "./TitleBar";
import Foot from "./Foot";
import Grid from "@mui/material/Grid";
import liam from "../images/liam-2023-3.png";
import reactStyle from "../style/reactStyle";
import { connect } from "react-redux";
import * as constants from "../constants";

class Home extends React.Component {
    
    displayIntro() {
        const intro_line = 
            <p>
                I am a Software Engineer II at <a href="https://www.astronautics.com" target="_blank" rel="noreferrer"> Astronautics Corp. of America</a>, 
                developing embedded and web applications for a line of airborne servers.
            </p>;

        if (this.props.winWidth > constants.BREAK_WIDTH) {
            return (
                <Grid className="grid-container" container>
                    <Grid item xs={4}>
                        <img className="liamimg" src={liam} alt="liam"></img>
                    </Grid>
                    <Grid item xs={4}>
                        {intro_line}
                    </Grid>
                </Grid>
            );
        } else {
            return (
                <div>
                    <Grid className="grid-container" style={{marginTop: "1em"}} container>
                        <Grid item xs={8} style={{display: "flex", justifyContnet: "center", alignItems: "center"}}>
                            <img className="liamimg" src={liam} alt="liam"></img>
                        </Grid>
                    </Grid>
                    <Grid className="grid-container" container>
                        <Grid item xs={10}>
                            {intro_line}
                            <br/>
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
        return (
            <>
                <div style={reactStyle.bgImg}>
                    <TitleBar style={reactStyle.titleBar} />
                    <div className={"greeting"}>Hi! I'm Liam.</div>
                </div>
                <div className="page-content-container">
                    {this.displayIntro()}
                </div>
                {this.displayFooter()}
            </>
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