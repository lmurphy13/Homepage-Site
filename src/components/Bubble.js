/* Copyright (c) 2024 - Liam M. Murphy */

function randDirection(max, min) {
    return Math.random() * (max - min) + min;
}

class Bubble {
    constructor(x, y, ctx, cvs) {
        this.x = x;
        this.y = y;
        this.speed = 0.1;
        this.dx = randDirection(this.speed, -this.speed);
        this.dy = randDirection(this.speed, -this.speed);
        this.color = "#616161";
        this.radius = 5;
        this.ctx = ctx;
        this.cvs = cvs;
    }


    update = () => {
        this.x += this.dx;
        this.y += this.dy;

        if (this.x > (this.cvs.width - this.radius) || this.x < 0 + this.radius)
            this.dx = -this.dx;

        if (this.y > (this.cvs.height - this.radius) || this.y < 0 + this.radius)
            this.dy = -this.dy;
    }

    draw = () => {
        this.ctx.fillStyle = this.color;
        this.ctx.strokeStyle = this.color;
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        this.ctx.stroke();
        this.ctx.fill();
    }
}

export default Bubble;