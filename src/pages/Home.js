/* Copyright (c) 2024-2025 - Liam M. Murphy */

import React from "react";
import liam from "../media/LiamAH_cropped.png";

class Home extends React.Component {
    render() {
        return (
            <div className="page-content">
                <img className="custom-image-home" src={liam} alt="Liam at Airbus Helicopters, Marignane, France"></img>
                <caption className="image-caption">Marignane, France</caption>
                <p style={{"paddingTop":"2rem"}}>
                    I am a software engineer living in Chicago. I work on
                    avionics connectivity equipment at{" "}
                    <a href="https://astronautics.com">
                        Astronautics Corporation of America
                    </a>
                    .
                </p>
            </div>
        );
    }
}

export default Home;
