/* Copyright (c) 2024 - Liam M. Murphy */

import React from "react";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";

class Projects extends React.Component {
    render() {
        return (
            <div className="page-content">
                <h2 style={{ textAlign: "center" }}>Projects</h2>
                <p style={{ textAlign: "center" }}>
                    Check out some of my active and completed projects:
                </p>

                <div className="project-article-container">
                    <div className="project-article-card">
                        <span className="project-article-card-title">
                            2024 Linux PC Build
                        </span>
                        <p className="project-article-card-desc">
                            My latest PC build. I'm running Fedora 39 on an
                            Intel i9 with two graphics cards. One is configured
                            for PCI passthrough to a QEMU/KVM VM running Windows
                            11 for gaming.
                        </p>
                        <span>
                            Link to <Link to="/projects/pc-build">page</Link>
                        </span>
                    </div>

                    <div className="project-article-card">
                        <span className="project-article-card-title">
                            Homepage Website
                        </span>
                        <p className="project-article-card-desc">
                            My personal homepage (this one!) that contains
                            information regarding my education, work, hobbies,
                            etc. Powered by{" "}
                            <a href="https://app.netlify.com">Netlify</a>
                        </p>
                        <span>
                            <a href="https://github.com/lmurphy13/Homepage-Site.git">
                                <GitHubIcon style={{ color: "white" }} />
                            </a>
                        </span>
                    </div>

                    <div className="project-article-card">
                        <span className="project-article-card-title">
                            LBASIC Compiler
                        </span>
                        <p className="project-article-card-desc">
                            Written in C, LBASIC is a simple, compiled language
                            with syntax inspired by C and BASIC. This project is
                            in semi-active development. I come back to it every
                            few months.
                        </p>
                        <span>
                            <a href="https://github.com/lmurphy13/LBASIC.git">
                                <GitHubIcon style={{ color: "white" }} />
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;
