// Copyright (c) 2023 Liam M. Murphy

import React from "react";
import Grid from "@mui/material/Grid";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoodreadsLogo from "../images/goodreads-white.png"
import { Paper } from "@mui/material";
import reactStyle from "../style/reactStyle";
import { connect } from "react-redux";
import * as constants from "../constants";

class Contact extends React.Component {
    render() {

        const containerStyle = (this.props.winWidth < constants.BREAK_WIDTH) ? {columnGap: "4.5em", rowGap: "2rem"} : {columnGap: "3.5em"};
        const paperStyle = (this.props.winWidth < constants.BREAK_WIDTH) ? reactStyle.contactCardMobile : reactStyle.contactPaperCard;
        const iconStyle = (this.props.winWidth < constants.BREAK_WIDTH) ? {color: "#ffffff", fontSize: "150", textAlign: "center"} :
            {color: "#ffffff", fontSize: "150", textAlign: "center"};
        const imageStyle = {width: "95%", height: "95%", marginTop: "0.5rem"};

        return (
            <div className="page-content-container">
                <h2 className="page-title">Contact Information</h2>
                <p className="centered-text">
                    Check out my socials below to see what I'm up to!
                </p>
                <br/>
                <Grid className="grid-container" style={containerStyle} container direction={(this.props.winWidth < constants.BREAK_WIDTH) ? "column" : ""}>
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
                    <Grid item xs={1.3}>
                        <Paper style={paperStyle} elevation={3}>
                            <a href="https://www.goodreads.com/user/show/19336023-liam-murphy" target="_blank" rel="noreferrer">
                                <img src={GoodreadsLogo} style={imageStyle} alt="White Goodreads 'g' logo"/>
                            </a>
                        </Paper>
                    </Grid>
                </Grid>
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
