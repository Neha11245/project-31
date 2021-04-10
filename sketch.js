const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;








function setup() {
  createCanvas(800,400);
  engine = Engine.create();
	world = engine.world;
  
  ground = Ground (400, 200, 50, 50);





  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ground.display();  
  drawSprites();
}