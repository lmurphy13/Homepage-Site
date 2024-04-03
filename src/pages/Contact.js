/* Copyright (c) 2024 - Liam M. Murphy */

import React from "react";

class Contact extends React.Component {
    render() {
        return (
            <div className="page-content-centered">
                <h2>Contact Information</h2>
                <p>Should you wish to contact me:</p>

                {/* <table className="contact-table">
                    <tr>
                        <td>Email me</td>
                        <td><code className="code-inline">liammurphy513 at gmail dot com</code></td>
                    </tr>
                    <tr>
                        <td>Visit me on</td>
                        <td><a href="https://www.linkedin.com/in/murphy-liam/">LinkedIn</a></td>
                    </tr>
                    <tr>
                        <td>Check out my</td>
                        <td><a href="https://github.com/lmurphy13">GitHub</a></td>
                    </tr>
                </table> */}

                <p>Email me at <code className="code-inline">liammurphy513 at gmail dot com</code></p>
                <p>Visit me on <a href="https://www.linkedin.com/in/murphy-liam/">LinkedIn</a></p>
                <p>Check out my <a href="https://github.com/lmurphy13">GitHub</a></p>
            </div>
        );
    }
}

export default Contact;
