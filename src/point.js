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