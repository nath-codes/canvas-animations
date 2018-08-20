import Circle from "./circle.js";

class Circles {
    constructor(context, amount) {
        this.context = context;
        this.amount = amount;
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
        const rgba = [];
        const max = 255;
        for (let i = 0; i < 3; i++) {
            const rgb = Math.floor(Math.random() * 255);
            rgba.push(rgb);
        }

        const opacity = Math.random().toFixed(1);
        rgba.push(opacity);

        return `rgba(${rgba.join(",")})`;
    }

    generateRadius() {
        return Math.floor(Math.random() * 30);
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
