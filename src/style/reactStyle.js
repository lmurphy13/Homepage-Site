// Copyright (c) 2023 Liam M. Murphy

import lava from "../images/lava_clean.jpg";

/* 
 * This module is used to define styling to React
 * components that seem to really dislike CSS.
 */

const style = {
    titleBar: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        position: "static",
        background: "transparent",
        width: "100%",
        minHeight: "60px",
        maxHeight: "60px"
    },
    bgImg: {
        backgroundImage: `url(${lava})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "30vh",
        minHeight: "30vh",
        width: "100%",
        position: "relative"
    },
    paperCard: {
        background: "#383838",
        minHeight: "10rem",
        width: "8em"
    },
    paperCardMobile: {
        background: "#383838",
        minHeight: "6.25rem",
        color: "white",
        width: "21rem"
    },
    paperCardLarge: {
        background: "#383838",
        minHeight: "15rem",
        color: "white",
    },
    contactPaperCard: {
        background: "#383838",
        minHeight: "10rem",
        width: "8em"
    },
    contactCardMobile: {
        background: "#383838",
        minHeight: "6.25rem",
        color: "white",
        width: "9.3rem"
    },
    contactCardLarge: {
        background: "#383838",
        minHeight: "15rem",
        color: "white",
    },
    projectFooter: {
        padding: "0.7rem",
        marginTop: "2.5rem",
        display: "flex",
        alignItems: "flex-end",
        columnGap: "0.5rem",
        justifyContent: "space-between"
    }
}

export default style;