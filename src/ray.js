class Ray {
    constructor(x, y, angle){
        this.s = { x: x, y: y}
        this.d = p5.Vector.fromAngle(angle);
        this.strengh = 100;
    }

    cast(wall){ // Uses math from wkipedia... Not sure how this works but it does
        const d = (wall.s.x - wall.e.x) * (this.s.y - (this.s.y + this.d.y)) - (wall.s.y - wall.e.y) * (this.s.x - (this.s.x + this.d.x));
        if(d == 0) return;
        const t = ((wall.s.x - this.s.x) * (this.s.y - (this.s.y + this.d.y)) - (wall.s.y - this.s.y) * (this.s.x - (this.s.x + this.d.x))) / d;
        const u = -((wall.s.x - wall.e.x) * (wall.s.y - this.s.y) - (wall.s.y - wall.e.y) * (wall.s.x - this.s.x)) / d;

        if(t > 0 && t < 1 && u > 0){ // Checking if there is an intersection if there is run code below

            let contact = {x: null, y: null, l: null}; // Making the "contact" point

            contact.x = wall.s.x + t * (wall.e.x - wall.s.x); // Calculating the intersection point X
            contact.y = wall.s.y + t * (wall.e.y - wall.s.y); // Calculating the intersection point Y
            contact.l = ((this.s.x - contact.x)*(this.s.x - contact.x) + (this.s.y - contact.y)*(this.s.y - contact.y))^0.5 // Calculating the ray length
            return contact;
        } else {
            return;
        }
    }
}