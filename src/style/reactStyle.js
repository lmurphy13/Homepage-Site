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
    },
    paperCard: {
        background: "#383838",
        minHeight: "10rem",
        width: "8em"
    }
}

export default style;