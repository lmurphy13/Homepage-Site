/* Copyright (c) 2024 - Liam M. Murphy */

import React from "react";
import liam from "../media/liam-2023-3.png";

class Home extends React.Component {
    render() {
        return (
            <div className="page-content">
                <img className="custom-image" src={liam} alt="liam"></img>
                <p>
                    I am a Milwaukee-based software engineer, working on
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
