import React from "react";

class LangIcon extends React.Component{
    constructor(props) {
        super(props);

        let iconColor = "#697077";
        let textColor = "#ffffff";

        switch (props.lang) {
            case "C":
                iconColor = "#669ad3";
                break;
            case "JavaScript":
                iconColor = "#f1e05a";
                textColor = "#000000";
                break;
            case "React":
                iconColor = "#61dafb";
                textColor = "#000000";
                break;
            default:
                // Defaults set above
        }

        this.style = {
            backgroundColor: iconColor,
            color: textColor,
            minWidth: "1.75rem",
            height: "1.7rem",
            paddingLeft: (props.lang.length > 1) ? "0.6rem" : "",
            paddingRight: (props.lang.length > 1) ? "0.6rem" : "",
            borderRadius: "25px",
            textAlign: "center",
            fontSize: "0.8rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        };
    }
    
    render() {
        return (
            <>
                <div style={this.style}>{this.props.lang}</div>
            </>
        );
    }
}

export default LangIcon;