
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree, ground, stone, launcher;
var boyImage, boy;
var mango1, mango2, mango3, mango4, mango5;

function preload()
{

boyImage = loadImage("images/boy.png");

	
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree(450, 280);
	ground = new Ground(600,height,1200,20);
	stone = new  Stone(200, 470,30);
	launcher = new Launcher(stone.body, {x:235, y:420});
	

	mango1 = new Mango(1000, 400, 20)

	Engine.run(engine);
  
}


function draw() {
  background("green");

  image(boyImage, 100, 570, 200, 300);

  ground.display();
  tree.display();
  stone.display();
  launcher.display();
  mango1.display();
  
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    launcher.fly();
}

function keyPressed(){
    if(keyCode === 32){
        launcher.attach(stone.body);
    }
}


