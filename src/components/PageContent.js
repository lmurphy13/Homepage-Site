/* Copyright (c) 2024 - Liam M. Murphy */

import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import PCBuild from "../pages/projects/PCBuild";
import Contact from "../pages/Contact";
import Bubble from "./Bubble";

const dist = (x1, y1, x2, y2) => {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

class PageContent extends React.Component {
    constructor(props) {
        super(props);

        this.cvs = null;
        this.ctx = null;
        this.interval = 10;
        this.bubbles = [];

        this.runBackground = this.runBackground.bind(this);
    }

    getPage() {
        switch (this.props.page) {
            /* Main pages */
            case "home":
                return <Home />;
            case "about":
                return <About />;
            case "projects":
                return <Projects />;
            case "contact":
                return <Contact />;
            /* Project pages */
            case "pc-build":
                return <PCBuild />;
            default:
                return <p className="error-404">Uh Oh! Page Not Found!</p>;
        }
    }

    runBackground() {
        this.ctx.fillStyle = "#2e2d2d";
        this.ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);


        while(this.bubbles.length < 120) {
            let x = (Math.random() * ((this.cvs.width - 50) - 50) + 50);
            let y = (Math.random() * ((this.cvs.height - 50) - 50) + 50);
            let b = new Bubble(x, y, this.ctx, this.cvs);

            // Spawn a bubble randomly, but 50 pixels away from the edge
            this.bubbles.push(b);
        }

        for (let i = 0; i < this.bubbles.length; i++) {
            for (let j = 0; j < this.bubbles.length; j++) {
                if (dist(this.bubbles[i].x, this.bubbles[i].y, this.bubbles[j].x, this.bubbles[j].y) < 80) {
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.bubbles[i].x, this.bubbles[i].y);
                    this.ctx.lineTo(this.bubbles[j].x, this.bubbles[j].y);
                    this.ctx.stroke();
                }
            }
            this.bubbles[i].update();
            this.bubbles[i].draw();
        }

        requestAnimationFrame(this.runBackground);
    }

    componentDidMount() {
        this.cvs = document.getElementById("cvs");
        this.ctx = this.cvs.getContext("2d");
        this.ctx.canvas.width = window.innerWidth;
        this.ctx.canvas.height = window.innerHeight;

        this.bubbles = [];

        this.runBackground();
    }

    render() {
        return (
            <div>
                <canvas className="cvs" id="cvs"></canvas>
                {this.getPage()}
            </div>
        );
    }
}

export default PageContent;
