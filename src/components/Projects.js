// Copyright (c) 2023 Liam M. Murphy

import React from "react";
import { Grid } from "@mui/material";
import { connect } from "react-redux";
import * as constants from "../constants";
import ProjectCard from "./ProjectCard";

class Projects extends React.Component {
    render() {
        let desktopContainerStyle = {
            marginTop: "1rem",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "1.2rem",
            wordWrap: "break-word"
        };

        let mobileContainerStyle = {
            marginTop: "1rem",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "1.2rem",
        }

        let containerStyle = (this.props.winWidth < constants.BREAK_WIDTH) ? mobileContainerStyle : desktopContainerStyle;
        
        return (
            <div className="page-content-container">
                <h2 className="page-title">Projects</h2>
                
                <Grid style={containerStyle} container spacing={5} direction={(this.props.winWidth < constants.BREAK_WIDTH) ? "column" : ""}>
                    <Grid item xs={3}>
                        <ProjectCard 
                            title="LBASIC Compiler"
                            desc="A simple, compiled language with syntax inspired by C and BASIC."
                            link="https://github.com/lmurphy13/LBASIC"
                            langs={["C", "Flex", "Bison"]}
                        >
                        </ProjectCard>
                    </Grid>

                    <Grid item xs={3}>
                        <ProjectCard
                            title="Homepage Site"
                            desc="My personal homepage containing my resume, projects, and contact information"
                            link="https://github.com/lmurphy13/Homepage-Site"
                            langs={["JavaScript", "React", "MUI"]}
                        >    
                        </ProjectCard>
                    </Grid>
                </Grid>
                <br></br>
                <h3 className="centered-text">More to come...</h3>
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

export default connect(mapStateToProps)(Projects);