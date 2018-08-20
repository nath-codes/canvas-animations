import Circles from "./circles.js";

class Canvas {
    constructor(canvas) {
        this.canvas = canvas;
        this.context = this.canvas.getContext("2d");
        this.setCanvasSize();
    }

    setCanvasSize() {
        this.canvas.height = window.innerHeight;
        this.canvas.width = window.innerWidth;
    }

    addEventListener() {
        window.addEventListener("resize", () => {
            this.setCanvasSize(canvas);
            this.draw();
        });
    }

    draw() {
        const circles = new Circles(this.context, 800);
        circles.animate();
    }
}

export default Canvas;
