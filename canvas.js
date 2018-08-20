import Circles from "/Circles.js";

const createCanvas = () => {
    const canvas = document.querySelector("canvas");
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    canvas.style.background = "#333";
    return canvas;
};

const canvas = createCanvas();
const context = canvas.getContext("2d");
const circles = new Circles(context, 30);
circles.animate();
