class Border {
    constructor(x1, y1, x2, y2, t){
        this.s = {x: x1, y: y1};
        this.e = {x: x2, y: y2};
        this.t = t > 100 || t < 0 || t == null ? 100 : t;   
    }

    show(){
        stroke(255);
        line(this.s.x, this.s.y, this.e.x, this.e.y)
    }
}