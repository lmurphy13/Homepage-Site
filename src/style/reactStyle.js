import lava from "../images/lava.jpg";

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
        width: "6.25rem"
    }
}

export default style;