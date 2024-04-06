/* Copyright (c) 2024 - Liam M. Murphy */

import React from "react";
import thesis from "../media/LiamMurphyThesis.pdf";
import bandpic from "../media/band.png";

class About extends React.Component {
    render() {
        return (
            <div className="page-content">
                <h2>Work</h2>
                <p>
                    I started at Astronautics as a Software Engineer in June
                    2021. I currently work on the{" "}
                    <a href="https://www.astronautics.com/products/connected-aircraft-solutions/aerosync/">
                        AeroSync
                    </a>{" "}
                    product line of connectivity avionics equipment. My work
                    primarily consists of C programming for an embedded Linux
                    platform, maintaining React and Electron applications, and
                    Python scripting.
                </p>

                <h2>Education</h2>
                <p>
                    I attended{" "}
                    <a href="https://marquette.edu">Marquette University</a> in
                    Milwaukee, WI for my bachelor's degree in Computer Science
                    and my master's in Computing.
                </p>
                <p>
                    During the summer of 2019, I was an undergraduate research
                    assistant with the{" "}
                    <a href="https://www.marquette.edu/computer-science/research-laboratories.php">
                        Systems Lab
                    </a>
                    .
                </p>
                <p>
                    As a graduate student, I completed my{" "}
                    <a href={thesis} download="LiamMurphyThesis.pdf">
                        thesis
                    </a>{" "}
                    under the guidance of{" "}
                    <a href="https://www.cs.mu.edu/~brylow/">
                        Dr. Dennis Brylow
                    </a>
                    , where I retargeted an Embedded MiniJava compiler from MIPS
                    to the Raspberry Pi 3 B+ (ARMv7) platform and added access
                    modifiers to the language. This extended the compatability
                    of MiniJava to the ARM version of{" "}
                    <a href="https://www.cs.mu.edu/~brylow/xinu/">
                        Embedded Xinu
                    </a>{" "}
                    for use in classroom instruction.
                </p>

                <h2>Other stuff</h2>
                <p>
                    I am a musician. I have been playing the highland bagpipes
                    since I was 10 years old, and with the{" "}
                    <a href="https://shannonrovers.com/">
                        Shannon Rovers Irish Pipe Band
                    </a>{" "}
                    since 2012. I wanted a new challenge, so in January 2024 I
                    began taking piano lessons at the Wisconsin Conservatory of
                    Music.
                </p>

                <p>
                    My other hobbies include reading, bowling, gaming, watching
                    shows/movies, and attempting to cook. I also try to work on
                    personal side-projects from time to time.
                </p>

                <p>
                    My science fiction franchise of choice is <i>Star Trek</i>,
                    though, I am partial to many others.
                </p>

                <img
                    className="band-image"
                    src={bandpic}
                    alt="liam and tim shannon rovers"
                />
                <caption>
                    Me and my dad, Tim
                    <br />
                    St. Patrick's Day Parade
                    <br />
                    March 16, 2024, Chicago, IL
                </caption>
            </div>
        );
    }
}

export default About;
