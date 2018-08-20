import Circle from "./circle.js";

class Circles {
    constructor(context, amount) {
        this.context = context;
        this.amount = amount;
        this.swatch = ["#405952", "#9C9B7A", "#9C9B7A", "#FF974F", "#F54F29"];
        this.circles = [];
        this.generate();

        this.animate = this.animate.bind(this);
    }

    generatePosition(limit, radius) {
        const circleDiameter = radius * 2;
        const edge = limit - circleDiameter + radius;
        return Math.random() * edge;
    }

    generateVelocity() {
        return Math.random() - 0.5;
    }

    generateFill() {
        const key = Math.floor(Math.random() * this.swatch.length);
        return this.swatch[key];
    }

    generateRadius() {
        return Math.floor(Math.random() * 5);
    }

    generate() {
        for (let i = 0; i < this.amount; i++) {
            const radius = this.generateRadius();
            const x = this.generatePosition(window.innerWidth, radius);
            const y = this.generatePosition(window.innerHeight, radius);
            const dx = this.generateVelocity();
            const dy = this.generateVelocity();
            const fill = this.generateFill();
            const circle = new Circle(this.context, x, y, dx, dy, radius, fill);
            this.circles.push(circle);
        }
    }

    animate() {
        requestAnimationFrame(this.animate);
        this.context.clearRect(0, 0, innerWidth, innerHeight);
        for (let i = 0; i < this.circles.length; i++) {
            this.circles[i].draw();
        }
    }
}

export default Circles;
