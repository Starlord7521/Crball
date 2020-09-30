class Paper{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':0.1,
            'density':1.2,
        }
        this.body = Bodies.ellipmse(x, y, width, diametre, options);
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        stroke("green");
        strokeWeight(6);
        fill(255);
        rect(0, 0, this.width, this.height);
        pop();
      }   
}