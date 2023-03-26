import React from "react";
import Grid from "@mui/material/Grid";
import resume from "../assets/LiamMurphyResumeMarch2023.pdf";
import { connect } from "react-redux";
import * as constants from "../constants";

class Resume extends React.Component {
    
    embedOrLink() {
        if (this.props.winWidth < constants.BREAK_WIDTH) {
            return (
                <p className="centered-text">
                    On mobile? Download my resume as a PDF <a href={resume} target="_blank" rel="noreferrer">here</a>.
                </p>
            );
        } else {
            return (
                <Grid className="grid-container" style={{marginTop: "1em"}} container>
                    <embed src={resume} width={800} height={800}></embed>
                </Grid>
                
            )
        }
    }
    
    render() {
        return (
            <div className="page-content-container">
                <h2 className="page-title">Resume</h2>
                {this.embedOrLink()}

                
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

export default connect(mapStateToProps)(Resume);