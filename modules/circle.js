import Mouse from "./mouse-event.js";

class Circle {
    constructor(context, x, y, dx, dy, radius, fill) {
        this.context = context;
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.currentRadius = radius;
        this.originalRadius = radius;
        this.maxRadius = radius * 10;
        this.fill = fill;
    }

    draw() {
        this.update();
        this.context.beginPath();
        this.context.arc(
            this.x,
            this.y,
            this.currentRadius,
            0,
            Math.PI * 2,
            false
        );
        this.context.fillStyle = this.fill;
        this.context.fill();
    }

    update() {
        let leftBuffer = this.currentRadius;
        let rightBuffer = window.innerWidth - this.currentRadius;
        let bottomBuffer = window.innerHeight - this.currentRadius;
        let topBuffer = this.currentRadius;

        if (this.x < leftBuffer || this.x > rightBuffer) {
            this.dx = -this.dx;
        }

        if (this.y < topBuffer || this.y > bottomBuffer) {
            this.dy = -this.dy;
        }

        const xDifference = Mouse.x - this.x;
        const yDifference = Mouse.y - this.y;
        const isNearX = xDifference < 50 && xDifference > -50;
        const isNearY = yDifference < 50 && yDifference > -50;

        if (isNearX && isNearY && this.currentRadius < this.maxRadius) {
            this.currentRadius += 1;
        } else if (this.currentRadius > this.originalRadius) {
            this.currentRadius -= 1;
        }

        //console.log(Mouse.x);
        //console.log(Mouse.y);

        this.x += this.dx;
        this.y += this.dy;
    }
}

export default Circle;
