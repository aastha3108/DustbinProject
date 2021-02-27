
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbin,ground	
var world;


function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	paper=new Ball(200,450,50)
	ground=Bodies.rectangle(width/2,690,width,20,{isStatic:true})
	World.add(world,ground)
	leftbody = new Dustbin(1100,620,20,100,0); rightbody = new Dustbin(900,620,21,100,0)
	;basebody = new Dustbin(1100,620,20,200,PI/2)

	Engine.run(engine);
    var render = Render.create(
	{ element: document.body, engine: engine, option: { width: 1700, height: 700, wireframes: false}}); Render.run(render);		
}

function keyPressed(){
	if (keyCode === UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:165,y:-105})
	}
}

function draw() {
background("red");
paper.display()
rectMode(CENTER);
rect(ground.position.x,ground.position.y,width,6)
basebody.display()

//image(dustbin,200,50,200,200)
  

}

