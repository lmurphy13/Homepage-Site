import React from "react";
import TitleBar from "./TitleBar";
import Foot from "./Foot";
import Grid from "@mui/material/Grid";
import liam from "../images/grad2022_cropped.jpg";
import reactStyle from "../style/reactStyle";

class Home extends React.Component {
    
    render() {
        return (
            <div>
                <div style={reactStyle.bgImg}>
                    <TitleBar style={reactStyle.titleBar} />
                    <p className="greeting">Hi! I'm Liam.</p>
                </div>
                <div className="page-content-container">
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
                </div>
                <Foot/>
            </div>
        );
    }
}

export default Home;