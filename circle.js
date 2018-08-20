class Circle {
    constructor(context, x, y, dx, dy, radius, fill) {
        this.context = context;
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.fill = fill;
    }

    draw() {
        this.update();
        this.context.beginPath();
        this.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        this.context.fillStyle = this.fill;
        this.context.fill();
    }

    update() {
        let leftBuffer = this.radius;
        let rightBuffer = window.innerWidth - this.radius;
        let bottomBuffer = window.innerHeight - this.radius;
        let topBuffer = this.radius;

        if (this.x < leftBuffer || this.x > rightBuffer) {
            this.dx = -this.dx;
        }

        if (this.y < topBuffer || this.y > bottomBuffer) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;
    }
}

export default Circle;
