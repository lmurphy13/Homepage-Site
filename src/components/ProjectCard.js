// Copyright (c) 2023 Liam M. Murphy

import React from "react";
import { Paper } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LangIcon from "./LangIcon";
import * as constants from "../constants";
import reactStyle from "../style/reactStyle";
import { connect } from "react-redux";

class ProjectCard extends React.Component {
    render() {
        let paperStyle = (this.props.winWidth < constants.BREAK_WIDTH) ? reactStyle.paperCardMobile : reactStyle.paperCardLarge;
        let iconStyle = {color: "#ffffff", fontSize: "50", textAlign: "center", marginBottom: "-0.6rem"};

        let languages = [];
        this.props.langs.forEach((lang) => {
            languages.push(<LangIcon lang={lang}/>);
        });

        return (
            <Paper style={paperStyle} elevation={3}>
                <h3 style={{textAlign: "center", paddingTop: "1.5rem"}}>{this.props.title}</h3>

                <p style={{padding: "1.5rem"}}>
                    {this.props.desc}
                </p>

                <br></br>
                <div style={reactStyle.projectFooter}>
                    <div style={{display: "flex", flexDireciton: "row", columnGap: "0.45rem"}}>
                        {languages}
                    </div>
                    
                    <a href={this.props.link} target="_blank" rel="noreferrer">
                        <GitHubIcon style={iconStyle} />
                    </a>
                </div>
            </Paper>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        winHeight: state.winHeight,
        winWidth: state.winWidth
    }
};

export default connect(mapStateToProps)(ProjectCard);