import React from "react";

class ErrorPage extends React.Component {
    displayError() {
        switch (this.props.code) {
            case "404": return "Error 404. This page you requested was not found.";
            default:
                return "Unknown Error!";
        }
    }

    render() {
        return (
            <div>
                <p style={{textAlign: "center", margin: "10vh", fontSize: "3em"}}>Oops!</p>
                <p style={{textAlign: "center", margin: "13vh", fontSize: "2em"}}>
                    {this.displayError()}
                </p>
            </div>
        );
    }
}

export default ErrorPage;