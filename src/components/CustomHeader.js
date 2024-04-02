/* Copyright (c) 2024 - Liam M. Murphy */

import React from "react";
import Nav from "./Nav";
import lava from "../media/lava_clean.jpg";

class CustomHeader extends React.Component {
    render() {
        const style = {
            // background: "transparent",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url(${lava})`,
        };

        return (
            <div className="custom-header-container" style={style}>
                <h1>Liam M. Murphy</h1>
                <Nav />
            </div>
        );
    }
}

export default CustomHeader;
