let view = new point(0, 0, 50)

function setup(){
    createCanvas(1280, 800);
}

function draw(){
    background(0);
    view.show();
    view.moveTo(mouseX, mouseY);
}