
function setup() {
  createCanvas(900, 600);
}

let k = 0;
let t = 0;
let w = 0.1;

const width = 900;
const height = 600;

function draw() {
  background('rgb(44, 35, 35)');
  translate(width / 2, height / 2);
  stroke('#0fdf21');
  strokeWeight(0.75);

  for (let i = 0; i < 100; i++) {
    line(x1(t + i), y1(t + i), x2(t + i) + 20, y2(t + i) + 20);
  }

  t += 0.25;
  k += 0.5;
  w += 0.6;
}

// function to change initial x co-ordinate of the line
function x1(t, k, w) {
  return cos(w * t) - k * sin(w * t);
}

// function to change initial y co-ordinate of the line
function y1(t, k, w) {
  return k * sin(w / t);
}

// function to change final x co-ordinate of the line
function x2(t, k, w) {
  return -1 * cos(w * t) + k * sin(w * t);
}

// function to change final y co-ordinate of the line
function y2(t, k, w) {
  return -k * sin(w / t);
}
