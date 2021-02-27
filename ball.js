class Ball {
    constructor(x,y,r){
     this.body = Bodies.circle(x,y,r/2,{restitution:0.8, density:1.2})   
     this.image = loadImage("paper.png")
     this.r = r
     World.add(world,this.body)
   }
display () {
    var angle = this.body.angle;
    push();
    translate(this.body.position.x,this.body.position.y);
    rotate(angle);
    fill(255)
    imageMode(CENTER);
    image(this.image,0,0,this.r + 30,this.r + 30)
    pop();
   }
}