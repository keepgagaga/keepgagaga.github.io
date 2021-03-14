function setup() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    createCanvas(width, height);
}

function draw() {
    if (mouseIsPressed) {
        fill(0);
    } else {
        fill(255);
    }
    ellipse(mouseX, mouseY, 80, 80);
}