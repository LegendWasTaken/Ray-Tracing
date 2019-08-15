let view = new Point(0, 0, 50);
let walls = [];
let fovOffset = [];
// let wall = new Border(1200, 140, 1000, 600);

function setup(){
    createCanvas(1280, 800);
    for(let i=0; i<10; i++){
        // Used to create a bunch of random walls yaknow
        walls.push(new Border(random(0, 1280), random(0, 800), random(0, 1280), random(0, 800)))
    }
}

function draw(){
    // Make the background black bcuz it looks cool keke
    background(0);
    /* 
     * For every angle in the field of view
     * go through and make a ray with a radian of that "index/angle" 
     */
    for(let i=0; i<360; i+=.1){
        
        let ray = new Ray(view.x, view.y, radians(i)); // Creating the new ray with the angle

        let shortestRay = null; // Shortest ray is used so that when there are multiple walls, it only renders the shortest one

        // For every ray that there is go and cast that ray through every single wall
        for(let j=0; j<walls.length; j++){

            // Running the ray cast function and caching the result ( Even if it isn't a point )
            let cp = ray.cast(walls[j]);
            if(cp){

                /* 
                 * If there is a point of intersection check if it was the shortest distance
                 * if it was the shortest distance, set the shortest ray to the current ray
                 */
                if(shortestRay == null || cp.l < shortestRay.l){
                    shortestRay = cp;
                }
            }
        }
        if(shortestRay){ // If the shortest ray exists render it
            stroke(10, 10, 255);
            line(view.x, view.y, shortestRay.x, shortestRay.y);
        }
    }
    for(let i=0; i<walls.length; i++){ // Simple for loop going through every single wall and rendering it
        walls[i].show();
    }

    // Show the actual point of view ( The light source )
    view.show();

    view.moveTo(mouseX, mouseY); // Moving the 
}
