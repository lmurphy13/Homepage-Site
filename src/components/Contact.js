import React from "react";
import Grid from "@mui/material/Grid";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Paper } from "@mui/material";
import reactStyle from "../style/reactStyle";

class Contact extends React.Component {
    render() {
        return (
            <div className="page-content-container">
                <h2 className="page-title">Contact Information</h2>
                <p className="grid-container" style={{textAlign: "center"}}>
                    If you'd like to contact me, please visit my various professional pages and social media.
                </p>
                <br/><br/>
                <Grid className="grid-container" container>
                    <Grid item xs={1.3}>
                        <Paper style={reactStyle.paperCard} elevation={3}>
                            <a href="https://www.github.com/lmurphy13" target="_blank" rel="noreferrer">
                                <GitHubIcon style={{color: "white", fontSize: "150", textAlign: "center"}} />
                            </a>
                        </Paper>
                    </Grid>
                    <Grid item xs={1.3}>
                        <Paper style={reactStyle.paperCard} elevation={3}>
                            <a href="https://www.linkedin.com/in/liam-murphy-05244114b/" target="_blank" rel="noreferrer">
                                <LinkedInIcon style={{color: "white", fontSize: "150", textAlign: "center"}} />
                            </a>
                        </Paper>
                    </Grid>
                    <Grid item xs={1.3}>
                        <Paper style={reactStyle.paperCard} elevation={3}>
                            <a href="https://twitter.com/lmurphy513" target="_blank" rel="noreferrer">
                                <TwitterIcon style={{color: "white", fontSize: "150", textAlign: "center"}} />
                            </a>
                        </Paper>
                    </Grid>
                </Grid>
                <br/><br/>
                <p className="grid-container" style={{textAlign: "center"}}>
                    Here's a link to my {" "}
                    <a href="https://www.cs.mu.edu/~lmurphy9/" target="_blank" rel="noreferrer">
                        academic website
                    </a>. It has a list of courses I've taken, but it's also very silly.
                </p>
            </div>
        );
    }
}

export default Contact;