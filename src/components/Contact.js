// Copyright (c) 2023 Liam M. Murphy

import React from "react";
import Grid from "@mui/material/Grid";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Paper } from "@mui/material";
import reactStyle from "../style/reactStyle";
import { connect } from "react-redux";
import * as constants from "../constants";

class Contact extends React.Component {
    render() {

        let containerStyle = (this.props.winWidth < constants.BREAK_WIDTH) ? {columnGap: "4.5em", marginLeft: "-1.5em"} : {};
        let paperStyle = (this.props.winWidth < constants.BREAK_WIDTH) ? reactStyle.paperCardMobile : reactStyle.paperCard;
        let iconStyle = (this.props.winWidth < constants.BREAK_WIDTH) ? {color: "#ffffff", fontSize: "100", textAlign: "center"} : 
            {color: "#ffffff", fontSize: "150", textAlign: "center"};

        return (
            <div className="page-content-container">
                <h2 className="page-title">Contact Information</h2>
                <p className="centered-text">
                    If you'd like to contact me, please visit my various professional pages.
                </p>
                <br/>
                <Grid className="grid-container" style={containerStyle} container>
                    <Grid item xs={1.3}>
                        <Paper style={paperStyle} elevation={3}>
                            <a href="https://www.github.com/lmurphy13" target="_blank" rel="noreferrer">
                                <GitHubIcon style={iconStyle} />
                            </a>
                        </Paper>
                    </Grid>
                    <Grid item xs={1.3}>
                        <Paper style={paperStyle} elevation={3}>
                            <a href="https://www.linkedin.com/in/liam-murphy-05244114b/" target="_blank" rel="noreferrer">
                                <LinkedInIcon style={iconStyle} />
                            </a>
                        </Paper>
                    </Grid>
                </Grid>
                <br/><br/>
                <p className="centered-text">
                    Here's a link to my {" "}
                    <a href="https://www.cs.mu.edu/~lmurphy9/" target="_blank" rel="noreferrer">
                        academic website
                    </a>. It has a list of courses I've taken, but it's also very silly.
                </p>
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

export default connect(mapStateToProps)(Contact);