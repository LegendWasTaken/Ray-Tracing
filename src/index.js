let view = new Point(0, 0, 50);
let walls = [];
let fovOffset = [];
// let wall = new Border(1200, 140, 1000, 600);

function setup(){
    createCanvas(1280, 800);
    walls.push(new Border(1000, 140, 1000, 600));
    for(let i=0; i<10; i++){
        // Used to create a bunch of random walls yaknow
        walls.push(new Border(random(0, 1280), random(0, 800), random(0, 1280), random(0, 800)))
    }
}

function draw(){
    // Make the background black bcuz it looks cool keke
    background(0);

    view.cast(walls);

    for(let i=0; i<walls.length; i++){ // Simple for loop going through every single wall and rendering it
        walls[i].show();
    }

    // Show the actual point of view ( The light source )
    view.show();

    view.moveTo(mouseX, mouseY); // Moving the 
}