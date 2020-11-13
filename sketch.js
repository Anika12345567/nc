
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var roof,bob1,bob2,bob3,bob4,bob5
var rope1,rope2,rope3,rope4,rope5
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof=new Ground(400,100,400,20)
bob1=new Bob(300,500,50)
bob2=new Bob(350,500,50)
bob3=new Bob(400,500,50)
bob4=new Bob(450,500,50)
bob5=new Bob(500,500,50)

rope1=new Rope(bob1.body,roof.body,-100)
rope2=new Rope(bob2.body,roof.body,-50)
rope3=new Rope(bob3.body,roof.body,0)
rope4=new Rope(bob4.body,roof.body,50)
rope5=new Rope(bob5.body,roof.body,100)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 roof.display();
 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
}

function keyPressed(){
	if(keyCode === 32){
		Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45})
		console.log("keyispressed")
	}

}
