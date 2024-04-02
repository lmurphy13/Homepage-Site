/* Copyright (c) 2024 - Liam M. Murphy */

import React from "react";

class Contact extends React.Component {
    render() {
        return (
            <div className="page-content-centered">
                <h2>Contact Information</h2>
                <p>Should you wish to contact me:</p>
                <p>Email me at <code className="code-inline">liammurphy513 at gmail dot com</code></p>
                <p>Visit me on <a href="https://www.linkedin.com/in/murphy-liam/">LinkedIn</a></p>
                <p>Check out my <a href="https://github.com/lmurphy13">GitHub</a></p>
            </div>
        );
    }
}

export default Contact;
