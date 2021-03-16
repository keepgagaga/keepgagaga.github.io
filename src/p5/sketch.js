function setup() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    createCanvas(width, height);
}

function draw() {
    background(127);
    noStroke();
    for (let i = 0; i < height; i += 20) {
      fill(129, 206, 15);
      rect(0, i, width, 10);
      fill(255);
      rect(i, 0, 10, height);
    }
}