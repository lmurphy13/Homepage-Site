import React from "react";

class ErrorPage extends React.Component {
    displayError() {
        switch (this.props.code) {
            case "404": return "404. This page is not available!";
            default:
                return "Unknown Error!";
        }
    }

    render() {
        return (
            <div>
                <p style={{textAlign: "center", margin: "10vh", fontSize: "2em"}}>You found a broken link!</p>
                <p style={{textAlign: "center", margin: "20vh", fontSize: "2em"}}>
                    {this.displayError()}
                </p>
            </div>
        );
    }
}

export default ErrorPage;