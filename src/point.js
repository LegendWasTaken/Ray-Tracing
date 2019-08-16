class Point {
    constructor(x, y, fov){
        this.x = x;
        this.y = y;
        this.rays = [];
        for(let a=0; a<360; a++){
            this.rays.push(new Ray(this.x, this.y, a*0.1));
        }
        this.fov = fov;
        this.a = 0 - fov/2;
    }

    cast(walls){
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
    }

    show(){
        fill(255);
        circle(this.x, this.y, 10);
    }

    moveTo(x, y){
        this.x = x == null ? this.x : x;
        this.y = y == null ? this.y : y;
    }

    move(x, y){
        let a = x == null ? 0 : x;
        let b = y == null ? 0 : x;
        this.x += a;
        this.y += b;
    }
}