// Copyright (c) 2023-2024 Liam M. Murphy

import React from "react";
import { Grid } from "@mui/material";
import { connect } from "react-redux";
import * as constants from "../constants";
import ProjectCard from "./ProjectCard";

class Projects extends React.Component {
    render() {
        let desktopContainerStyle = {
            marginTop: "1rem",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "1.2rem",
            wordWrap: "break-word"
        };

        let mobileContainerStyle = {
            marginTop: "1rem",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "1.2rem"
        }

        let containerStyle = (this.props.winWidth < constants.BREAK_WIDTH) ? mobileContainerStyle : desktopContainerStyle;

        return (
            <div className="page-content-container">
                <h2 className="page-title">Projects</h2>

                <h3 className="page-title" style={{marginTop: "2em"}}>Computer Stuff</h3>
                <div className="page-content">
                    <p className="page-content-p">
                        In March 2024, I decided to build a new PC. The prices of hardware had stablized, so I figured it was a good time. I'm running Fedora 39 with the RX 7800 XT associated with it.
                        I have a Windows 11 VM (QEMU/KVM) installed with Virt-Manager. I've set it up with the RTX 4070 passed through to it
                        (<a href="https://wiki.archlinux.org/title/PCI_passthrough_via_OVMF" target="_blank" rel="noreferrer">PCI passthrough</a>).
                    </p>

                    <p>
                        This Fedora build was bit of an experiment. I wanted to see how well I could run games within a virtualized environment. The results were interesting. Some games run better
                        within the Windows VM than on Fedora, and vice-versa. Overall, I've been quite satisfied with running Linux as daily driver. I'd prefer to run Debian 12, but the current
                        stable release kernel doesn't support my Radeon graphics card. Fedora has been fine.
                    </p>

                    <table className="page-content-table">
                        <caption>Specs:</caption>
                        <tr>
                            <td>CPU</td>
                            <td>Intel i9-13900K</td>
                        </tr>
                        <tr>
                            <td>RAM</td>
                            <td>Corsair Vengeance DDR5-6400 64GB</td>
                        </tr>
                        <tr>
                            <td>Motherboard</td>
                            <td>Asus ROG STRIX Z790-E Gaming WiFi</td>
                        </tr>
                        <tr>
                            <td>Graphics</td>
                            <td>Gigabyte GAMING OC Radeon RX 7800 XT</td>
                        </tr>
                        <tr>
                            <td>Graphics</td>
                            <td>Gigabyte WINDFORCE OC GeForce RTX 4070</td>
                        </tr>
                        <tr>
                            <td>Storage</td>
                            <td>Samsung 990 Pro 2TB M.2-2280 NVME SSD</td>
                        </tr>
                        <tr>
                            <td>Storage</td>
                            <td>Samsung 990 Pro 4TB M.2-2280 NVME SSD</td>
                        </tr>
                    </table>

                    <p className="page-content-p">
                        I built my previous PC, a Windows 10/Debian 12 dual-boot setup, in the late spring of 2019. I wanted a machine that could dual boot
                        Windows and Linux, and could support virtual reality headsets. I used an Oculus Rift S for a while, and it ran great with this computer.
                    </p>

                    <p className="page-content-p">
                        Now, in 2019, 500GB boot drives were more than enough for what I was doing. I had a few games that I stored on the SSD, and the rest on the HDD.
                        In 2023, game installations had become so large that 500GB was no longer sufficient.
                    </p>

                    <table className="page-content-table">
                        <caption>Specs:</caption>
                        <tr>
                            <td>CPU</td>
                            <td>Intel i7-8700</td>
                        </tr>
                        <tr>
                            <td>RAM</td>
                            <td>Corsair Vengeance DDR4-3600 32GB</td>
                        </tr>
                        <tr>
                            <td>Motherboard</td>
                            <td>MSI MPG Z390 GAMING EDGE</td>
                        </tr>
                        <tr>
                            <td>Graphics</td>
                            <td>Gigabyte WINDFORCE GeForce RTX 2070</td>
                        </tr>
                        <tr>
                            <td>Storage</td>
                            <td>Samsung 860 Evo 500GB SSD (Windows 10)</td>
                        </tr>
                        <tr>
                            <td>Storage</td>
                            <td>Samsung 860 Evo 500GB SSD (Debian 12, previously Pop!_OS)</td>
                        </tr>
                        <tr>
                            <td>Storage</td>
                            <td>Western Digital Blue 4TB 5400 RPM HDD (Misc. storage)</td>
                        </tr>
                    </table>

                    <h3 className="page-title" style={{marginTop: "2em"}}>Code Stuff</h3>
                </div>

                <Grid style={containerStyle} container spacing={5} direction={(this.props.winWidth < constants.BREAK_WIDTH) ? "column" : ""}>
                    <Grid item xs={3}>
                        <ProjectCard
                            title="LBASIC Compiler"
                            desc="A simple, compiled language with syntax inspired by C and BASIC."
                            link="https://github.com/lmurphy13/LBASIC"
                            langs={["C"]}
                        >
                        </ProjectCard>
                    </Grid>

                    <Grid item xs={3}>
                        <ProjectCard
                            title="Homepage Site"
                            desc="My personal homepage containing my resume, projects, and contact information"
                            link="https://github.com/lmurphy13/Homepage-Site"
                            langs={["JavaScript", "React", "MUI"]}
                        >
                        </ProjectCard>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        winHeight: state.winHeight,
        winWidth: state.winWidth
    }
};

export default connect(mapStateToProps)(Projects);