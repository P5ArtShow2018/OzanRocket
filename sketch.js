var top = { x1: 400, y1: 480, x2: 320, y2: 405, x3: 320, y3: 550 };
var body = { x: 70, y: 480 - (100 / 2), w: 250, h: 100 };
var windows = { x: 260, y: 480, w: 75, h: 50 };
var wings = [];
wings[0] = { x: 30, y: 400, x1: body.x, y1: body.y, x2: 200, y2: body.y };
wings[1] = { x: 30, y: 400 + body.h + 60, x1: body.x, y1: body.y + body.h, x2: 200, y2: body.y + body.h };

var bg = undefined;

function preload() {
 bg = loadImage('bg.png');
}

var mic = undefined;

function setup() {
 mic = new p5.AudioIn();
 mic.start();
 createCanvas(1000, 1000);
 background(0, 0, 0);
 
 noStroke();
 fill(255, 0, 0);
 triangle(top.x1 - 600, top.y1, top.x2 - 600, top.y2, top.x3 - 600, top.y3);
 fill(255, 255, 255);
 rect(body.x - 600, body.y, body.w, body.h);
 fill(50, 50, 50);
 ellipse(windows.x - 600, windows.y, windows.w, windows.h);
 fill(255, 0, 0);
 triangle(wings[0].x - 600, wings[0].y, wings[0].x1 - 600, wings[0].y1, wings[0].x2 - 600, wings[0].y2);
 triangle(wings[1].x - 600, wings[1].y, wings[1].x1 - 600, wings[1].y1, wings[1].x2 - 600, wings[1].y2);
}

function draw() {
 image(bg, 0, 0)
 bg.resize(1000, 1000);
 console.log(mouseX); console.log(mouseY);
 
 if(mic.getLevel > 0.25) {
   var speed = 5;
   top.x1 += speed; top.x2 += speed; top.x3 += speed;
   body.x += speed;
   windows.x += speed;
   wings[0].x += speed; wings[0].x1 += speed; wings[0].x2 += speed;
   wings[1].x += speed; wings[1].x1 += speed; wings[1].x2 += speed;
  }
}
