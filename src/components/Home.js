import React from "react";
import lava from "../images/lava.jpg";
import TitleBar from "./TitleBar";
import Foot from "./Foot";
import Grid from "@mui/material/Grid";
import liam from "../images/grad2022_cropped.jpg";

class Home extends React.Component {

    render() {
        const tb = {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            position: "static",
            background: "transparent",
            width: "100%",
            minHeight: "60px",
            maxHeight: "60px"
        };

        const bgimg = {
            backgroundImage: `url(${lava})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "30vh"
        };

        const liamimg = {
            borderRadius: "50%",
            flex: 1,
            width: "60%",
            height: "auto",
            resizeMode: "contain"
        };

        const gridContainer = {
            justifyContent: "center",
        };
    
        return (
            <div>
                <div style={bgimg}>
                    <TitleBar style={tb}/>
                    <p className="greeting">Hi! I'm Liam.</p>
                </div>
                <div className="page-content-container">
                   <Grid style={gridContainer} container>
                        <Grid item xs={4}>
                            <img style={liamimg} src={liam} alt="liam"></img>
                        </Grid>
                        <Grid item xs={4}>
                            Hello
                        </Grid>
                   </Grid>
                </div>
                <Foot/>
            </div>
        );
    }

}

export default Home;